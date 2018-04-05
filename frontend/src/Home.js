import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data : []
		}
	}
	ComponentDidMount(){
		() => this.loadDataFromServer();
	}
	loadDataFromServer(){
		axios.get('http://127.0.0.1:8000/profile/'+this.props.user+'/')
	      .then(res => {
	        console.log(res);
	        console.log(res.data);
	        this.setState({data : res.data})
      })
	      .catch(e => console.log(e));
	}
	render(){
		if(!this.state.data){
			return <div>Sorry the user data is not found</div>
		}
		return(
		<div>
			<h1>{this.state.data['name']}</h1>
			<p>{this.state.data['about']}</p>
		</div>);
	}
}
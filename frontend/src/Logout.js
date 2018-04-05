import React from 'react'

export default class Logout extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = event => {
		
	}
	render(){
		return (
			<div>
				<p>Click here to <a href="#" onclick = {() => {sessionStorage.setItem('status','');window.location.replace("/") ;}}>sign in </a>back </p>
			</div>);
	}
}
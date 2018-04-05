import React from 'react'
import Header from './Header'
import Main from './Main'

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Header/>
        <Main user = {this.props.user}/>
      </div>);
  }
}
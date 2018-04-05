import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'
import Logout from './Logout'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export default class Main extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
			<main>
				<Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/edit' component={Edit}/>
      <Route path='/logout' component={Logout}/>
    </Switch>
    </main>
			</div>);
	}
}

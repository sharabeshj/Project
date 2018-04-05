import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export default class Header extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<header>
    				<nav>
      					<ul>
					        <li><Link to='/'>Home</Link></li>
					        <li><Link to='/edit'>Edit</Link></li>
					        <li><Link to='/logout'>Logout</Link></li>
      					</ul>
    				</nav>
  				</header>
			</div>);
	}
}
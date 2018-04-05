import React from 'react';
import axios from 'axios';


export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : '',
      about : ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      username: this.state.name,
      password: this.state.about
    };

    axios.put('http://127.0.0.1:8000/profile/'+this.props.user, { data })
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.replace("/") ;
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name:
            <input type="text" id="username" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" id="password" onChange={this.handleChange} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
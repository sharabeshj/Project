import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import $ from 'jquery'
import Cookies from 'js-cookie'

export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      'username': this.state.username,
      'password': this.state.password
    };
    console.log(user);
    var csrftoken = Cookies.get('csrftoken');
      function csrfSafeMethod(method) {
      // these HTTP methods do not require CSRF protection
      return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  }
      $.ajaxSetup({
          beforeSend: function(xhr, settings) {
              if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                  xhr.setRequestHeader("X-CSRFToken", csrftoken);
              }
          }
      });
    axios.post('http://127.0.0.1:8000/login/', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);

        sessionStorage.setItem('status','loggedIn');
        ReactDOM.render((<BrowserRouter><App user = {res.data['id']}/></BrowserRouter>), document.getElementById('root'));
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
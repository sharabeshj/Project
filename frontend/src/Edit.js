import React from 'react';
import axios from 'axios';
import $ from 'jquery'
import Cookies from 'js-cookie'

export default class Edit extends React.Component {
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

    axios.put('http://127.0.0.1:8000/profile/'+this.props.user+'/', { data })
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
            Name:
            <input type="text" id="name" onChange={this.handleChange} />
          </label>
          <label>
            About:
            <textarea rows = "4" cols = "20" onChange = {this.handleChange}></textarea>
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
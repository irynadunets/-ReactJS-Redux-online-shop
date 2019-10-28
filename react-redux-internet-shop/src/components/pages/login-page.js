import React, { Component } from 'react';
import { div,form,label,input,button} from 'bootstrap';
import { Redirect } from 'react-router-dom';
import './pages.css';
import { Link } from 'react-router-dom';
export default class LoginPage extends Component {
  state = {
    login: '',
    password: ''
  }

  onLoginChange = (e) =>{
    this.setState({
      login: e.target.value
    })
  }

  onPasswordChange = (e) =>{
    this.setState({
      password: e.target.value
    })
    }

    onSubmit = (e) =>{
          e.preventDefault();
          console.log(this.state.login,this.state.password);
          this.props.history.push(`/`);
     }

     onRegister = (e) =>{
           this.props.history.push(`/register`);
      }

    render(){
      return (
        <div>
        <form className="form-inline d-flex"
              onSubmit={this.onSubmit} >
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email"
                 className="form-control"
                 id="email"
                 onChange={this.onLoginChange}
                 placeholder="Input e-mail" required/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password"
                 className="form-control"
                 id="pwd"
                 onChange={this.onPasswordChange}
                 placeholder="Input password" required/>
        </div>
        <button type="primary" className="btn btn-primary" onSubmit={this.onSubmit}>Submit</button>
        <Link className="btn btn-primary" to="/register" >Register</Link>
        </form>
      </div>
  )
}
};

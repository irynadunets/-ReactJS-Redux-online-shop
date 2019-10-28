import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import './pages.css';

export default class RegisterPage extends Component {
  state = {
    login: '',
    password: ''
  }
  onLoginChange = (e) =>{
    e.preventDefault();
    this.setState({
      login: e.target.value
    })
  }

  onPasswordChange = (e) =>{
    this.setState({
      password: e.target.value
    })
    e.preventDefault();
    }

  onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.login,this.state.password);
        this.props.history.push(`/`);
   }
   render(){
      return (
  <Form onSubmit={this.onSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control  type="email" placeholder="Enter email" onChange={this.onLoginChange} required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control  type="password" placeholder="Password" onChange={this.onPasswordChange} required/>
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" required/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control required/>
    </Form.Group>
  </Form.Row>

  <Form.Row className="btn-login">
  <button type="primary" className="btn btn-primary" onSubmit={this.onSubmit}>Submit</button>
  </Form.Row>

</Form>
)
}
};

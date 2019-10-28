import React from 'react';
import './header.css';
import {  NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Filter from '../../containers/filter/filter';
import FormSearch from '../../containers/formsearch/formsearch';


const Header = ({addedCount, total}) => {
  return (
    <div className="d-flex flex-column">
   <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand>React-Bootstrap STORE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Deliver</Nav.Link>
      <NavDropdown title="Payment" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Cash</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">MasterCard</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">PayPal</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">BankTransfer</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      <Nav>
      <Filter />
      <FormSearch />
      <Nav.Link href='/login'>Login</Nav.Link>
      <Nav.Link href='/register'>Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
<Nav.Link ><Link to='/cart'>  <i className="fa fa-shopping-cart"></i>      { addedCount } Items { total } $   </Link></Nav.Link>
<br/>
</div>
  );
};


export default Header;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

function Navbar_woo() {
  var activePage;

  activePage = useLocation().pathname;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand to="#home">WoOp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={activePage} className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Register">Register</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar_woo;

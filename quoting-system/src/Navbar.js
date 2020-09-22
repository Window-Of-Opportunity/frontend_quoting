import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';

function Navbar_woo() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">WoOp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Register</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar_woo;

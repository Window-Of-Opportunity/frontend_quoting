import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import Home from '../../views/Home/Home';
import Add from '../../views/Add/Add';
import Register from '../../views/Register/Register';
import Login from '../../views/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function Navbar_woo() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand to="#home">WoOp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Register">Register</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
      <Switch>
          <Route exact path="/Add">
            <Add />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home"></Redirect>
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default Navbar_woo;

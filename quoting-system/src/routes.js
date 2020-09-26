import React from 'react';
import Home from './views/Home/Home';
import Add from './views/Add/Add';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Cart from './views/Cart/Cart';
import Pricing from './views/Pricing/Pricing';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/Add">
                    <Add />
                </Route>
                <Route exact path="/">
                    <Redirect to="/Add"></Redirect>
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
                <Route exact path="/Cart">
                    <Cart />
                </Route>
                <Route exact path="/Pricing">
                    <Pricing />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
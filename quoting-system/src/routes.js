import React from 'react';
import {Home} from './views/Home';
import {Navbar} from './components/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Routes = () => {
    return(
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path = "/Home" component = {Home}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;
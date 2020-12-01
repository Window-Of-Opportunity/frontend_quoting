import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

//var base_url = 'http://back-woop.herokuapp.com/login';
window.$base_url = 'http://127.0.0.1:5000';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>
      <Routes></Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

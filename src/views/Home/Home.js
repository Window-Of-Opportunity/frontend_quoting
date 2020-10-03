import React from 'react';
import test from './test.jpg';
import './Home.css';
import {Jumbotron, Button} from 'react-bootstrap'


function Home() {
  return(
    <div style={{ justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)", backgroundImage:`url(${test})`}}>
      <Jumbotron variant="dark">
        <h1>Window of Opportunity</h1>
        <p>
          Making windows easy.
        </p>
        <p>
          <Button href= "/Add" variant="primary">Get started</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;


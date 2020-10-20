import React from 'react';
import test from './test.jpg';
import './Home.css';
import {Jumbotron, Button} from 'react-bootstrap'


function Home() {
  return (
    <div>
      <div fluid style={{ left: "0", right: "0", position: 'fixed', justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)", backgroundImage: `url(${test})`, backgroundSize: "cover" }}></div>
      <div fluid style={{ left: "0", right: "0", position: 'fixed', justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)" }}>
        <Jumbotron style={{color: "white", background: "rgba(0,0,0,0.4)", border: '1px solid rgba(0,0,0,0.1)', borderRadius: '3px'}}>
          <h1>Window of Opportunity</h1>
          <p>
            Making windows easy.
        </p>
          <p>
            <Button href="/Add" variant="primary">Get started</Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Home;


import React from 'react';
import test from './test.jpg';
import test2 from './test2.jpg';
import './Home.css';
import {Jumbotron, Carousel, Button} from 'react-bootstrap'


function Home() {
  return (
    <div>
      <div fluid style={{ left: "0", right: "0", position: 'fixed', justifyContent: "center", alignItems: "center", width: "100%", minHeight: "calc(100vh - 56px)" }}>
        <Carousel>
          <Carousel.Item>
            <img
              backgroundSize= "cover"
              className="d-block w-100"
              src={test}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              backgroundSize= "cover"
              className="d-block w-100"
              src={test2}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
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


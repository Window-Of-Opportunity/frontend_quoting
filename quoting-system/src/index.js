import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import test from './test.png'
import * as serviceWorker from './serviceWorker';
import { InputGroup, FormControl, Carousel, Button} from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
      <Carousel>
        <Carousel.Item>
              <img
              className="d-block w-100"
              src={test}
              width="750"
              height="750"
              resizemode="contain"
              alt="First slide"
            />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>Single Hung</h3>
            <p style={{ color: 'black' }}>A basic window</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    <div class = "m-5">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Type</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Type of Window"
          aria-label="Type of Window"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Name of Window"
        aria-label="Name of Window"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Width</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Inches"
        aria-label="Inches"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Height</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Inches"
        aria-label="Inches"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Quantity</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="# of windows"
        aria-label="# of windows"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Color of Window"
        aria-label="Color of Window"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    </div>
    <div class="m-5">
    <Button variant="dark">Add to Quote</Button>{' '}
    <Button variant="dark">Advanced</Button>{' '}
    <Button style={{float: 'right'}} variant="dark">View Quote</Button>{' '}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

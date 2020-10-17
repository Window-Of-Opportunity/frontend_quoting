import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import test from './test.png';
import { InputGroup, Form, Col, Carousel, Button, Modal} from 'react-bootstrap';
import Cookies from 'js-cookie';

//Single Hung, Double Hung, Arched, Awning, Bay, Bow, Casement, Egress, Garden Style, Glass Block, Hopper, Jalousie, Picture, Round Circle, Skylight, Sliding, Storm, Transom, Oriel, Bay, Dormer


function Add() {
  const [validated, setValidated] = useState(false);
  //Cookies.remove('sugar');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      //if the cookie is not found, create a new cookie with this data.
      if(Cookies.get('sugar') == null){
        Cookies.set('sugar', [{ name: windowName.current.value, width: windowWidth.current.value, height: windowHeight.current.value, 
          frame: windowFrame.current.value, quantity: windowQuantity.current.value, type: "SH IMAGE"}]);
      }else{
        //or else unpack the cookie and add more data to it.
        let temp = JSON.parse(Cookies.get('sugar'));
        temp.push({ name: windowName.current.value, width: windowWidth.current.value, height: windowHeight.current.value, 
          frame: windowFrame.current.value, quantity: windowQuantity.current.value, type: "SH IMAGE"});
          console.log(temp);
        Cookies.set('sugar', temp);
      }
      //check what is in the cookie
      window.alert("Sugar cookie currently contains: " + Cookies.get('sugar'));
    }

    setValidated(true);

  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //let windowType = React.createRef();
  let windowName = React.createRef();
  let windowWidth = React.createRef();
  let windowHeight = React.createRef();
  let windowQuantity = React.createRef();
  let windowFrame = React.createRef();

  return(
    <React.StrictMode>
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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={test}
            width="750"
            height="750"
            resizemode="contain"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>Double Hung</h3>
            <p style={{ color: 'black' }}>A less basic window</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div class="m-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Window Name</Form.Label>
            <Form.Control
              required
              ref={windowName}
              type="text"
              placeholder="Name of Window"
            />
            <Form.Control.Feedback type="invalid">
                Please provide a valid window name.
            </Form.Control.Feedback>
          </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Width</Form.Label>
            <Form.Control
              required
              ref={windowWidth}
              type="number"
              placeholder="Width in inches"
            />
            <Form.Control.Feedback type="invalid">
                Please provide a valid width.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustomUsername">
            <Form.Label>Height</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                ref={windowHeight}
                placeholder="Height in inches"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid height.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>Quantity</Form.Label>
            <Form.Control 
              ref={windowQuantity}
              type="number" 
              placeholder="Number of Windows" 
              required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid quantity.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom04">
            <Form.Label>Frame Type</Form.Label>
            <Form.Control
              ref={windowFrame}
              as="select"
              custom
              required
            >
              <option value="Fiberglass">Fiberglass</option>
              <option value="Stone">Stone</option>
              <option value="Wood">Wood</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Button variant="dark" type="submit">Add to Quote</Button>{' '}
        <Button variant="dark" onClick={handleShow}>Advanced</Button>{' '}
        <Button href="./Cart" style={{ float: 'right' }} variant="dark">View Quote</Button>{' '}
      </Form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Advanced Window Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form inline>
          <Form.Check
            type="checkbox"
            id="customControlInline"
            label="Tempering"
            custom
          />
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.StrictMode>
  );
}

export default Add;


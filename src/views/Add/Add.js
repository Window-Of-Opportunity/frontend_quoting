import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import test from './test.png';
import { InputGroup, Form, Col, Carousel, Button, Modal} from 'react-bootstrap';

function Add() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              type="text"
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
                type="text"
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
            <Form.Control type="text" placeholder="Number of Windows" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid quantity.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom04">
            <Form.Label>Frame</Form.Label>
            <Form.Control type="text" placeholder="Frame type" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid frame type.
            </Form.Control.Feedback>
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
        <Modal.Body>Tempering, etc...</Modal.Body>
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


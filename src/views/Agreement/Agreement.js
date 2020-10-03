import React, {useState} from 'react';
import {InputGroup, Button, Col, Form} from 'react-bootstrap';


function Agreement() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return(
    <div class="m-5">
      <Button href="/Pricing" variant="dark">Back</Button>{' '}
      <p></p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Customer Name"
            />
            <Form.Control.Feedback type="invalid">
                Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Phone number"
            />
            <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Email Address"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address of home" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid City.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Zip Code.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button variant="dark" type="submit">Generate Agreement</Button>
      </Form>
    </div>
  );
}

export default Agreement;

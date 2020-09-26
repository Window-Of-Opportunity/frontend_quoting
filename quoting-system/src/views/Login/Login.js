import React, {useState} from 'react';
import test from './test.png';
import {Jumbotron, Button, Form} from 'react-bootstrap';

function Login() {
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
    <div fluid style={{ justifyContent: "center", alignItems: "center", display: "flex", width: "100%", height: "100vh", backgroundImage:`url(${test})`}}>
        <Jumbotron>
        <h1>Login:</h1>
        <br></br>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <p>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </p>
          <p>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              required
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers, and
              must not contain spaces, special characters, or emoji.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </p>
          <p>
            <Button type="submit" variant="primary">Login</Button>
          </p>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default Login;

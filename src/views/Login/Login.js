import React, {useState} from 'react';
import test from './test.jpg';
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
    <div>
    <div fluid style={{ left: "0", right: "0", position:'fixed', justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)", backgroundImage:`url(${test})`, backgroundSize: "cover", filter: 'blur(20px)'}}></div>
    <div fluid style={{ left: "0", right: "0", position:'fixed', justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)"}}>
        <Jumbotron style={{minWidth: "40%"}}>
        <h1>Login:</h1>
        <br></br>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <p>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
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
    </div>
  );
}

export default Login;

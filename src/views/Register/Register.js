import React, {useState} from 'react';
import test from './test.png';
import {Jumbotron, Button, Form} from 'react-bootstrap';


function Register() {
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
    <div style={{ justifyContent: "center", alignItems: "center", display: "flex", width: "100%", height: "100vh", backgroundImage:`url(${test})`}}>
        <Jumbotron>
            <h1>Registration:</h1>
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
                    <Form.Group controlId="validationCustom02">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid phone number.
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
                    <Form.Label htmlFor="inputPassword5">Verify Password</Form.Label>
                    <Form.Control
                    required
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                    Re-enter your previous password
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                    Password does not match.
                    </Form.Control.Feedback>
                </p>
                <p>
                    <Button type="submit" variant="primary">Register</Button>
                </p>
            </Form>
        </Jumbotron>
    </div>
  );
}

export default Register;

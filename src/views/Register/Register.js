import React, {useState} from 'react';
import test from './test.jpg';
import {Jumbotron, Button, Form, Modal} from 'react-bootstrap';


function Register() {
    const [validated, setValidated] = useState(false);
	var [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	var baseUrl = window.$base_url+'/register_customer';

    const handleSubmit = (event) => {
      const form = event.currentTarget;
	  event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true);
		
		username = email;
		var obj = {'Customer':{'username':username, 'password': password, 'email':email, 'phone':phone}};
		
		  fetch(baseUrl, {
		  method: 'POST',
		  body: JSON.stringify(obj),
		  headers: { 'Content-Type': 'application/json' },
		})
		.then(function(response) {
			// Shorthand to check for an HTTP 2xx response status.
			// See https://fetch.spec.whatwg.org/#dom-response-ok
			if (response.ok) {
			  return response;
			}
			// Raise an exception to reject the promise and trigger the outer .catch() handler.
			// By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
			throw Error(response.statusText);
			  }).then(function(response) {
				return response.json();
			  }).then(function(json) {
				console.log('Request succeeded with JSON response:', json);
			  }).catch(function(error) {
				console.log('Request failed:', error.message);
			  });
    };

  return(
      <div>
          <div fluid style={{ left: "0", right: "0", position: 'fixed', justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)", backgroundImage: `url(${test})`, backgroundSize: "cover", filter: 'blur(20px)'}}></div>
          <div fluid style={{ left: "0", right: "0", position: 'fixed', justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)" }}>
              <Jumbotron style={{color: "white", background: "rgba(0,0,0,0.4)", border: '1px solid rgba(0,0,0,0.1)', borderRadius: '3px', minWidth: "40%"}}>
                  <h1>Registration:</h1>
                  <br></br>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <p>
                          <Form.Group controlId="validationCustom01">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                  required
                                  type="email"
								  value={email}
								  onChange={e => setEmail(e.target.value)}
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
								  value={phone}
								  onChange={e => setPhone(e.target.value)}
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
                          <Form.Text id="passwordHelpBlock">
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
							  value={password}
							  onChange={e => setPassword(e.target.value)}
                          />
                          <Form.Text id="passwordHelpBlock">
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
		  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successful Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>Successfully Registered {username}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
     </Modal>
        </div>
  );
}

export default Register;

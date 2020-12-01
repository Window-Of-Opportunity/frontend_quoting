import React, {useState} from 'react';
import test from './test.jpg';
import {Jumbotron, Button, Form, Modal} from 'react-bootstrap';
import Cookie from 'js-cookie'



function Login() {
	
	
	const [validated, setValidated] = useState(false);
	
	const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
		
	const handleSubmit = (event) => {
		var baseUrl = window.$base_url; //global variable initialised in index.js
		
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
		  event.stopPropagation();
		}
		
		setValidated(true);
		
		var obj = {'username':username, 'password': password};
		
		  fetch(baseUrl+'/login', {
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
				Cookie.set('access_token',json['access_token']);
				Cookie.set('refresh_token',json['refresh_token']);
				handleShow();
			  }).catch(function(error) {
				console.log('Request failed:', error.message);
			  });
	};

  return(
    <div>
    <div fluid style={{ left: "0", right: "0", position:'fixed', justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)", backgroundImage:`url(${test})`, backgroundSize: "cover", filter: 'blur(20px)'}}></div>
    <div fluid style={{ left: "0", right: "0", position:'fixed', justifyContent: "center", alignItems: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)"}}>
        <Jumbotron style={{color: "white", background: "rgba(0,0,0,0.4)", border: '1px solid rgba(0,0,0,0.1)', borderRadius: '3px', minWidth: "40%"}}>
        <h1>Login:</h1>
        <br></br>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <p>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
				value={username}
				onChange={e => setUsername(e.target.value)}
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
			  value={password}
			  onChange={e => setPassword(e.target.value)}
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
	<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successful Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Successfully Logged In {username}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
     </Modal>
    </div>
	
  );
}

export default Login;

import React, {useState} from 'react';
import test from './test.jpg';
import {Jumbotron, Button, Form} from 'react-bootstrap';



function Login() {
	var url = 'http://back-woop.herokuapp.com/login';
	var test_url = 'http://127.0.0.1:5000/login';
	const [validated, setValidated] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
		
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
		  event.preventDefault();
		  event.stopPropagation();
		}

		setValidated(true);
		const data = new FormData(form.current)
		  fetch(test_url, {
		  method: 'POST',
		  body: JSON.stringify(username, password),
		  headers: { 'Content-Type': 'application/json' },
		})
		.then(.then(function(response) {
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
				ChromeSamples.log('Request succeeded with JSON response:', json);
			  }).catch(function(error) {
				ChromeSamples.log('Request failed:', error.message);
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
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="username"
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
    </div>
  );
}

export default Login;

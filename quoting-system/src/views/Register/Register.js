import React from 'react';
import test from './test.png';
import {Jumbotron, Button, InputGroup, FormControl} from 'react-bootstrap';


function Register() {
  return(
    <div style={{ justifyContent: "center", alignItems: "center", display: "flex", width: "100%", height: "100vh", backgroundImage:`url(${test})`}}>
        <Jumbotron>
            <h1>Registration:</h1>
            <br></br>
            <p>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </p>
            <p>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Phone</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </p>
            <p>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </p>
            <p>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Verify Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </p>
            <p>
            <Button href= "/" variant="primary">Register</Button>
            </p>
        </Jumbotron>
    </div>
  );
}

export default Register;

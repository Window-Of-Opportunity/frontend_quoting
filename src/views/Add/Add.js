import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './../../components/WindowCarousel/WindowCarousel'
import { InputGroup, Form, Col, Button, Modal, Alert} from 'react-bootstrap';

//Window types
const WINDOW_TYPES = ["Single Hung", "Double Hung", "Arched", "Awning", "Bay", "Bow", "Casement", "Egress", "Garden Style", "Glass Block", "Hopper", "Jalousie", "Picture",
   "Round Circle", "Skylight", "Sliding", "Storm", "Transom", "Oriel", "Bay", "Dormer"];

//Window frame types
const WINDOW_FRAMES = ["Wood", "Vinyl", "Fiberglass", "Aluminum"];

//Number of panes
const NUMBER_PANES = [1, 2, 3, 4];

//Gas filling types
const GAS_FILLING_TYPE = ["Argon", "Krypton", "Xenon"];

//Color values
const COLOR_VALUES = ["Ebony", "Bahama Brown", "Bright Silver Pearlescent", "Bronze", "Cadet Gray", "Cascade Blue", "Cashmere", "Clay", "Coconut Cream", "Copper Pearlescent", "Evergreen",
                "Gunmetal", "Hampton Sage", "Liberty Bronze Pearlescent", "Pebble Gray", "Sierra White", "Stone White", "Suede", "Wineberry"];

//"on" and "off" represent booleans for the check boxes.
var attributes = {};

//determines whether additional options shall be default values.
var defaultAdditionalOptions = true;

function Add() {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);

  var myStorage = sessionStorage;

  myStorage.removeItem('chocolate');

  //myStorage.clear();

  // myStorage.setItem('butter', "toast");
  // console.log(myStorage.getItem('butter'));

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      setShowAlert(true);
      //if the cookie is not found, create a new cookie with this data.
      attributes.name = windowName.current.value;
      attributes.width = windowWidth.current.value;
      attributes.height = windowHeight.current.value;
      attributes.frame =  windowFrame.current.value;
      attributes.quantity = windowQuantity.current.value;
      attributes.type = windowType.current.value;

      //if statement to take care of additional options
      if(defaultAdditionalOptions){
        attributes.numPanes = 3;
        attributes.obscured = false;
        attributes.tempered = false;
        attributes.gasFillingType = "Argon";
        attributes.lowE3 = true;
        attributes.nailingFlange = false;
        attributes.color = "Ebony";
      }

      if(myStorage.getItem('sugar') == null){
        myStorage.setItem('sugar', JSON.stringify([attributes]));
      }else{
        //or else unpack the cookie and add more data to it.
        let temp = JSON.parse(myStorage.getItem('sugar'));
        temp.push(attributes);
        //console.log(temp);
        myStorage.setItem('sugar', JSON.stringify(temp));
      }
      console.log(attributes);
      console.log(myStorage.getItem('sugar'));
      //check what is in the cookie
      //console.log(attributes);
      //window.alert("Sugar cookie currently contains: " + Cookies.get('sugar'));
    }

    setValidated(true);
  };

  const AdditionalOptionSubmit = (event) => {
    //const form = event.currentTarget;
    defaultAdditionalOptions = false;
    attributes.numPanes = numPanes.current.value;
    attributes.obscured = obscured.current.checked;
    attributes.tempered = tempered.current.checked;
    attributes.gasFillingType = gasFillingType.current.value;
    attributes.lowE3 = lowE3.current.checked;
    attributes.nailingFlange = nailingFlange.current.checked;
    attributes.color = color.current.value;
    //console.log(attributes);
    handleClose();

  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //defining base options
  let windowType = React.createRef();
  let windowName = React.createRef();
  let windowWidth = React.createRef();
  let windowHeight = React.createRef();
  let windowQuantity = React.createRef();
  let windowFrame = React.createRef();

  //defining additional options
  let numPanes = React.createRef();
  let obscured = React.createRef();
  let tempered = React.createRef();
  let gasFillingType = React.createRef();
  let lowE3 = React.createRef();
  let nailingFlange = React.createRef();
  let color = React.createRef();

  return (
    <React.StrictMode>
        <Alert show={showAlert} onClose={() => setShowAlert(false)} variant="success" dismissible>
          <Alert.Heading>Window successfully entered</Alert.Heading>
        </Alert>
      <div>
        <Carousel></Carousel>
      </div>
      <div style={{position:'absolute', bottom:0, width:"100%", padding:"20px"}}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom05">
              <Form.Label>Window Type</Form.Label>
              <Form.Control
                ref={windowType}
                as="select"
                custom
                required
              >
                {WINDOW_TYPES.map((value, index) => {
                  return <option value={value}>{value}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>
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
                {WINDOW_FRAMES.map((value, index) => {
                  return <option value={value}>{value}</option>
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button variant="dark" type="submit">Add to Quote</Button>{' '}
          <Button variant="dark" onClick={handleShow}>Advanced</Button>{' '}
          <Button href="./Cart" style={{ float: 'right' }} variant="dark">View Quote</Button>{' '}
        </Form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Advanced Window Options</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Number of Panes</Form.Label>
              <Form.Control
                ref={numPanes}
                as="select"
                custom
                required
              >
                {NUMBER_PANES.map((value) => {
                  if (value === 3)
                    return <option value={value} selected>{value}</option>
                  return <option value={value}>{value}</option>
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Check
                ref={obscured}
                type="checkbox"
                id="a"
                label="Obscured"
                custom
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                ref={tempered}
                type="checkbox"
                id="b"
                label="Tempering"
                custom
              />
            </Form.Group>
            <Form.Group>
              < Form.Label>Gas Filling Type</Form.Label>
              <Form.Control
                ref={gasFillingType}
                as="select"
                custom
                required
              >
                {GAS_FILLING_TYPE.map((value) => {
                  if (value === "Argon")
                    return <option value={value} selected>{value}</option>
                  return <option value={value}>{value}</option>
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Check
                ref={lowE3}
                type="checkbox"
                label="LowE3"
                id="c"
                defaultChecked="true"
                custom
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                ref={nailingFlange}
                type="checkbox"
                label="Nailing flange"
                id="d"
                custom
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Color</Form.Label>
              <Form.Control
                ref={color}
                as="select"
                custom
                required
              >
                {COLOR_VALUES.map((value, index) => {
                  if (value === "Ebony")
                    return <option value={value} selected>{value}</option>
                  return <option value={value}>{value}</option>
                })}
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={AdditionalOptionSubmit}>
              Save Changes
                        </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.StrictMode>
  );
}

export default Add;


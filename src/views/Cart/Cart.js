import React, {useState} from 'react';
import {Button, Modal, Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import Cookies from 'js-cookie';


function Cart() {

  var [products, setProducts] = useState(1);
  var [selectedRows] = useState(1);

  //get products from the local cookie 'sugar'
  products = JSON.parse(Cookies.get('sugar'));
  //generate unique primary keys
  generatePrimaryKeys();

  //selected rows array for delete, duplicate, and inspect functions.
  selectedRows = [];

  //states for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //selectrow attributes for react-bootstrap-table2
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: 'gray',
    onSelect: (row, isSelect, rowIndex, e) => {
      //window.alert("[" + row + ", " + isSelect + ", " + rowIndex + ", " + e + "]");
      if(isSelect){
        //console.log("Added " + rowIndex);
        selectedRows.push(products[rowIndex]);
      }else{
        for(var i = 0; i < selectedRows.length; i++){
          if(selectedRows[i].id === rowIndex){
            selectedRows.splice(i, 1);
            //console.log("Removed " + rowIndex);
          }
        }
      }
      //console.log(selectedRows);
    },
    onSelectAll: (isSelect, rows, e) => {
      if(!isSelect){
        selectedRows = [];
      }else{
        selectedRows = [];
        for(var i = 0; i < rows.length; i++){
          selectedRows.push(products[i]);
        }
      }
      //log(selectedRows);
    },
    selected: []
  };

  //columns attributes for table
  const columns = [{
    dataField: 'id',
    text: 'ID',
    hidden: true
  }, {
    dataField: 'name',
    text: 'Name'
  }, {
    dataField: 'width',
    text: 'Width'
  }, {
    dataField: 'height',
    text: 'Height'
  }, {
    dataField: 'frame',
    text: 'Frame'
  }, {
    dataField: 'quantity',
    text: 'Quantity'
  }, {
    dataField: 'type',
    text: 'Type'
  }];


  //duplicate row func
  function duplicateRow(){
    //console.log(selectedRows);
    for(var i = 0; i < selectedRows.length; i++){
      products.push(products[selectedRows[i].id]);
      //console.log("Duplicating: " + selectedRows[i].id);
    }
    generatePrimaryKeys();
    Cookies.set('sugar', products);
    setProducts(JSON.parse(Cookies.get('sugar')));
    //console.log(products);
  }

  //delete row func
  function deleteRow(){
    //console.log(selectedRows);
    selectedRows.sort((a, b) => (a.id > b.id) ? 1 : -1);
    for(var i = selectedRows.length - 1; i >= 0; i--){
      products.splice(selectedRows[i].id, 1);
      //console.log("Deleting: " + selectedRows[i].id);
    }
    generatePrimaryKeys();
    Cookies.set('sugar', products);
    setProducts(JSON.parse(Cookies.get('sugar')));
    //console.log(products);
  }
  
  //generate PKs for table
  function generatePrimaryKeys(){
    for(var i = 0; i < products.length; i++){
      products[i].id = i;
    }
  }

  //render
  return(
    <div class="m-5">
      <Button href="/Add" variant="dark">Back</Button>{' '}
      <p></p>
      <BootstrapTable
        wrapperClasses="table-responsive"
        striped bordered
        keyField='id'
        data={ products }
        columns={ columns }
        selectRow={ selectRow }
      />
      <Button variant="dark" onClick={deleteRow}>Delete</Button>{' '}
      <Button variant="dark" onClick={duplicateRow}>Duplicate</Button>{' '}
      <Button variant="dark" onClick={handleShow}>Examine</Button>{' '}
      <Button variant="dark">Save</Button>{' '}
      <Button variant="dark">AR View</Button>{' '}
      <Button href="/Pricing" variant="dark" style={{ float: 'right' }}>Generate Quote</Button>{' '}
      <Modal size = 'xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Advanced Window Inspection View</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardDeck>
            {products.map((product) => (
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.type}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Width: {product.width} Height: {product.height}</ListGroupItem>
                  <ListGroupItem>Frame: {product.frame}</ListGroupItem>
                  <ListGroupItem>Quantity: {product.quantity}</ListGroupItem>
                  <ListGroupItem>Number of Panes: {product.numPanes}</ListGroupItem>
                  <ListGroupItem>Obscured: {product.obscured === true ? "yes" : "no"}</ListGroupItem>
                  <ListGroupItem>Tempered: {product.tempered === true ? "yes" : "no"}</ListGroupItem>
                  <ListGroupItem>Gas Filling Type: {product.gasFillingType}</ListGroupItem>
                  <ListGroupItem>LowE3: {product.lowE3 === true ? "yes" : "no"}</ListGroupItem>
                  <ListGroupItem>Nailing Flange: {product.nailingFlange === true ? "yes" : "no"}</ListGroupItem>
                  <ListGroupItem>Color: {product.color}</ListGroupItem>
                </ListGroup>
              </Card>
            ))}
          </CardDeck>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;

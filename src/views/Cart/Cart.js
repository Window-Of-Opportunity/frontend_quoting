import React, {useState} from 'react';
import {Button, Modal, Card, CardDeck} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import Cookies from 'js-cookie';


function Cart() {

  var [products, setProducts] = useState(1);

  //get products from the local cookie 'sugar'
  products = JSON.parse(Cookies.get('sugar'));
  //generate unique primary keys
  generatePrimaryKeys();

  //selected rows array for delete, duplicate, and inspect functions.
  let selectedRows = [];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: 'gray',
    onSelect: (row, isSelect, rowIndex, e) => {
      //window.alert("[" + row + ", " + isSelect + ", " + rowIndex + ", " + e + "]");
      if(isSelect){
        console.log("Added " + rowIndex);
        selectedRows.push(rowIndex);
      }else{
        for(var i = 0; i < selectedRows.length; i++){
          if(selectedRows[i] === rowIndex){
            selectedRows.splice(i, 1);
            console.log("Removed " + rowIndex);
          }
        }
      }
      console.log(selectedRows);
    },
    selected: []
  };

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


  function duplicateRow(){
    console.log(selectedRows);
    for(var i = 0; i < selectedRows.length; i++){
      products.push(products[selectedRows[i]]);
      console.log("Duplicating: " + selectedRows[i]);
    }
    generatePrimaryKeys();
    Cookies.set('sugar', products);
    setProducts(JSON.parse(Cookies.get('sugar')));
    console.log(products);
  }

  function deleteRow(){
    console.log(selectedRows);
    selectedRows.sort();
    for(var i = selectedRows.length - 1; i >= 0; i--){
      products.splice(selectedRows[i], 1)
      console.log("Deleting: " + selectedRows[i]);
    }
    generatePrimaryKeys();
    Cookies.set('sugar', products);
    setProducts(JSON.parse(Cookies.get('sugar')));
    console.log(products);
  }
  
  function generatePrimaryKeys(){
    for(var i = 0; i < products.length; i++){
      products[i].id = i;
    }
  }

  return(
    <div class="m-5">
      <Button href="/Add" variant="dark">Back</Button>{' '}
      <p></p>
      <BootstrapTable
        wrapperClasses="table-responsive"
        striped bordered
        keyField='id'
        onDataSizeChange= {(e) => {console.log(e)}}
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
            {[
  'Primary',
  'Secondary',
  'Success',
  'Danger',
  'Warning',
  'Info',
  'Light',
  'Dark',
].map((variant, idx) => (
  <Card
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{variant} Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
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

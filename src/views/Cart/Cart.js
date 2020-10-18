import React, {useState} from 'react';
import {Button, Modal, Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import Cookies from 'js-cookie';


function Cart() {

  var [products, setProducts] = useState(1);
  var [selectedRows] = useState(1);

  //Cookies.remove('chocolate');
  //get products from the local cookie 'sugar', if empty products is an empty array.
  if(Cookies.get('sugar') == null){
    products = [];
  }else{
    //else set products to cookie value
    products = JSON.parse(Cookies.get('sugar'));
  }

  //cookie for row selection
  //if the cookie does not exist selectedRows is an empty array
  if(Cookies.get('chocolate') == null){
    selectedRows = [];
  }else{
    //sort rows received from cookie
    selectedRows = JSON.parse(Cookies.get('chocolate'));
    selectedRows.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  //generate unique primary keys
  generatePrimaryKeys();

  //selected rows array for delete, duplicate, and inspect functions.

  //states for modal
  const [show, setShow] = useState(false);

  function handleClose(){
    Cookies.remove('chocolate');
    setShow(false)
  };
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
      Cookies.set('chocolate', selectedRows);
      console.log(JSON.parse(Cookies.get('chocolate')));
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
      Cookies.set('chocolate', selectedRows);
      //log(selectedRows);
    },
    selected: []
  };

  //columns attributes for table
  const columns = [{
    dataField: 'id',
    text: 'ID',
    //hidden: true
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
    //sort rows before duplication.
    selectedRows.sort((a, b) => (a.id > b.id) ? 1 : -1);
    for(var i = 0; i < selectedRows.length; i++){
      products.push(products[selectedRows[i].id]);
      //console.log("Duplicating: " + selectedRows[i].id);
    }
    generatePrimaryKeys();
    Cookies.set('sugar', products);
    setProducts(JSON.parse(Cookies.get('sugar')));
    Cookies.remove('chocolate');
    //console.log(products);
  }

  //delete row func
  function deleteRow(){
    //console.log(selectedRows);
    //sort rows before deleting
    selectedRows.sort((a, b) => (a.id > b.id) ? 1 : -1);
    for(var i = selectedRows.length - 1; i >= 0; i--){
      products.splice(selectedRows[i].id, 1);
      //console.log("Deleting: " + selectedRows[i].id);
    }
    generatePrimaryKeys();
    Cookies.set('sugar', products);
    setProducts(JSON.parse(Cookies.get('sugar')));
    Cookies.remove('chocolate');
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
      <Modal size = 'xl' show={show} onHide={handleClose} overflow-x = "auto">
        <Modal.Header closeButton>
          <Modal.Title>Advanced Window Inspection View</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardDeck>
            {selectedRows.map((product) => (
              <Card style={{ minWidth: '200px', marginBottom:"20px"}}>
                <Card.Body>
                  <Card.Title><b>Name:</b> {product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><b>ID:</b> {product.id}</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem><b>Type:</b> {product.type}</ListGroupItem>
                  <ListGroupItem><b>Width:</b> {product.width} inches</ListGroupItem>
                  <ListGroupItem><b>Height:</b> {product.height} inches</ListGroupItem>
                  <ListGroupItem><b>Frame:</b> {product.frame}</ListGroupItem>
                  <ListGroupItem><b>Quantity:</b> {product.quantity}</ListGroupItem>
                  <ListGroupItem><b>Number of Panes:</b> {product.numPanes}</ListGroupItem>
                  <ListGroupItem><b>Obscured:</b> {product.obscured === true ? "yes" : "no"}</ListGroupItem>
                  <ListGroupItem><b>Tempered:</b> {product.tempered === true ? "yes" : "no"}</ListGroupItem>
                  <ListGroupItem><b>Gas Filling Type:</b> {product.gasFillingType}</ListGroupItem>
                  <ListGroupItem><b>LowE3:</b> {product.lowE3 === true ? "yes" : "no"}</ListGroupItem>
                  <ListGroupItem><b>Nailing Flange:</b> {product.nailingFlange === true ? "yes" : "no"}</ListGroupItem>
                  <ListGroupItem><b>Color:</b> {product.color}</ListGroupItem>
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

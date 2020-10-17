import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import Cookies from 'js-cookie';


function Cart() {

  var [products, setProducts] = useState(1);

  products = JSON.parse(Cookies.get('sugar'));
  generatePrimaryKeys();

  let selectedRows = [];

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
    hidden: false
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
      <Button variant="dark">Examine</Button>{' '}
      <Button variant="dark">Save</Button>{' '}
      <Button variant="dark">AR View</Button>{' '}
      <Button href="/Pricing" variant="dark" style={{ float: 'right' }}>Generate Quote</Button>{' '}
    </div>
  );
}

export default Cart;

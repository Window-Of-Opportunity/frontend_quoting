import React from 'react';
import {Button} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import Cookies from 'js-cookie';


function Cart() {

  //var [products, setProducts] = useState(1);

  let products = JSON.parse(Cookies.get('sugar'));

  let selectedRows = [];

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: 'gray',
    onSelect: (row, isSelect, rowIndex, e) => {
      window.alert("[" + row + ", " + isSelect + ", " + rowIndex + ", " + e + "]");
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
    }
  };

  const columns = [{
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
    console.log(products);
    //var products2 = products;
    //setProducts(products2)
  }
  
  return(
    <div class="m-5">
      <Button href="/Add" variant="dark">Back</Button>{' '}
      <p></p>
      <BootstrapTable
        wrapperClasses="table-responsive"
        striped bordered
        keyField='name'
        onDataSizeChange= {(e) => {console.log(e)}}
        data={ products }
        columns={ columns }
        selectRow={ selectRow }
      />
      <cartTable/>
      <Button variant="dark">Delete</Button>{' '}
      <Button variant="dark" onClick={duplicateRow}>Duplicate</Button>{' '}
      <Button variant="dark">Examine</Button>{' '}
      <Button variant="dark">Save</Button>{' '}
      <Button variant="dark">AR View</Button>{' '}
      <Button href="/Pricing" variant="dark" style={{ float: 'right' }}>Generate Quote</Button>{' '}
    </div>
  );
}

export default Cart;

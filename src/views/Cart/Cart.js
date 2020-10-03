import React from 'react';
import {Button} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';


function Cart() {
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: 'gray'
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
  
  const products = [{
    name: 'Building 1 Room 1', width: '12', height: '12', frame: "Fiberglass", quantity: "20", type: "SH image"
  },{
    name: 'Building 1 Room 2', width: '25', height: '25', frame: "Wood", quantity: "5", type: "DH image"
  }];
  
  return(
    <div class="m-5">
      <Button href="/Add" variant="dark">Back</Button>{' '}
      <p></p>
      <BootstrapTable
        wrapperClasses="table-responsive"
        striped bordered
        keyField='name'
        data={ products }
        columns={ columns }
        selectRow={ selectRow }
      />
      <Button variant="dark">Delete</Button>{' '}
      <Button variant="dark">Duplicate</Button>{' '}
      <Button variant="dark">Examine</Button>{' '}
      <Button variant="dark">Save</Button>{' '}
      <Button variant="dark">AR View</Button>{' '}
      <Button href="/Pricing" variant="dark" style={{ float: 'right' }}>Generate Quote</Button>{' '}
    </div>
  );
}

export default Cart;

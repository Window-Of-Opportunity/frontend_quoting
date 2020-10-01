import React from 'react';
import {Button, Table} from 'react-bootstrap';


function Cart() {
  return(
    <div class="m-5">
      <Button href="/Add" variant="dark">Back</Button>{' '}
      <p></p>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Width</th>
            <th>Height</th>
            <th>Frame</th>
            <th>Quantity</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Building 1 Room 1</td>
            <td>12</td>
            <td>12</td>
            <td>Fiberglass</td>
            <td>20</td>
            <td>SH Image</td>
          </tr>
          <tr>
            <td>Building 1 Room 2</td>
            <td>25</td>
            <td>25</td>
            <td>Wood</td>
            <td>25</td>
            <td>DH Image</td>
          </tr>
        </tbody>
      </Table>
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

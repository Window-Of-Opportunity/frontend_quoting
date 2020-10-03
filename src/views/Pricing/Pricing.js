import React from 'react';
import {Button, Table} from 'react-bootstrap';


function Pricing() {
  return(
    <div class="m-5">
      <Button href="/Cart" variant="dark">Edit Cart</Button>{' '}
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
            <th>Price Per Unit</th>
            <th>Total</th>
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
            <td>$50</td>
            <td>$1000</td>
          </tr>
          <tr>
            <td>Building 1 Room 2</td>
            <td>25</td>
            <td>25</td>
            <td>Wood</td>
            <td>5</td>
            <td>DH Image</td>
            <td>$2000</td>
            <td>$10000</td>
          </tr>
          <tr>
            <td colSpan="7"></td>
            <td>$11000</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan="2">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Cost</td>
          </tr>
          <tr>
            <td>Window Costs</td>
            <td>---</td>
          </tr>
          <tr>
            <td>Total for Pickup</td>
            <td>---</td>
          </tr>
          <tr>
            <td>Labor</td>
            <td>---</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="dark">Download</Button>{' '}
      <Button variant="dark" href="/Agreement" style={{ float: 'right' }}>Complete Order</Button>{' '}
    </div>
  );
}

export default Pricing;

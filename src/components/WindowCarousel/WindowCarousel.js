import React from 'react';
import SH from './SH.png';
import SH2 from './SH2.png';
import SHE from './SH-1.jpg';
import SHE2 from './SH-2.jpg';
import {CardDeck, Card} from 'react-bootstrap';

function WindowCarousel() {

  return (
    <div>
      <CardDeck class="d-flex flex-row flex-nowrap overflow-auto">
        <Card style={{ minWidth: '500px', maxWidth: '500px', minHeight: '500px', maxHeight: '500px', margin: '20px' }}>
          <Card.Img style={{minWidth: '500px', maxWidth: '500px', minHeight: '500px', maxHeight: '500px', objectFit: 'cover'}} src={SHE} onClick={() => window.alert("Hi")}/>
        </Card>
        <Card style={{ minWidth: '500px', maxWidth: '500px', minHeight: '500px', maxHeight: '500px', margin: '20px' }}>
          <Card.Img style={{minWidth: '500px', maxWidth: '500px', minHeight: '500px', maxHeight: '500px', objectFit: 'cover'}} src={SHE2} onClick={() => window.alert("Hi")}/>
        </Card>
        <Card style={{ minWidth: '500px', maxWidth: '500px', minHeight: '500px', maxHeight: '500px', margin: '20px' }}>
          <Card.Img style={{minWidth: '500px', maxWidth: '500px', minHeight: '500px', maxHeight: '500px', objectFit: 'cover'}} src={SH} onClick={() => window.alert("Hi")}/>
        </Card>
        <Card style={{ minWidth: '500px', maxWidth: '500px', minHeight: '500px', maxHeight: '500px', margin: '20px' }}>
          <Card.Img style={{minWidth: '500px', maxWidth: '500px', minHeight: '500px', maxHeight: '500px', objectFit: 'cover'}} src={SH2} onClick={() => window.alert("Hi")}/>
        </Card>
      </CardDeck>
    </div>
  );
}

export default WindowCarousel;

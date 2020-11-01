import React from 'react';
import SH from './SH.png';
import SH2 from './SH2.png';
import SHE from './SH-1.jpg';
import SHE2 from './SH-2.jpg';
import {CardDeck, Card} from 'react-bootstrap';

function WindowCarousel() {

  return (
    <div style={{display:'block', overflow:'auto'}}>
      <CardDeck class="d-flex flex-row flex-nowrap overflow-auto" style={{margin:"20px"}}>
        <Card style={{ minWidth: '50vh', maxWidth: '50vh', minHeight: '50vh', maxHeight: '50vh', margin: '20px' }}>
          <Card.Img style={{minWidth: '50vh', maxWidth: '50vh', minHeight: '50vh', maxHeight: '50vh', objectFit: 'cover'}} src={SHE} onClick={() => window.alert("Hi")}/>
        </Card>
        <Card style={{ minWidth: '50vh', maxWidth: '50vh', minHeight: '50vh', maxHeight: '50vh', margin: '20px' }}>
          <Card.Img style={{minWidth: '50vh', maxWidth: '50vh', minHeight: '50vh', maxHeight: '50vh', objectFit: 'cover'}} src={SHE2} onClick={() => window.alert("Hi")}/>
        </Card>
        <Card style={{ minWidth: '50vh', maxWidth: '50vh', minHeight: '50vh', maxHeight: '50vh', margin: '20px' }}>
          <Card.Img style={{minWidth: '50vh', maxWidth: '50vh', minHeight: '50vh', maxHeight: '50vh', objectFit: 'cover'}} src={SH} onClick={() => window.alert("Hi")}/>
        </Card>
        <Card style={{ minWidth: '50vh', maxWidth: '50vh', minHeight: '50vh', maxHeight: '50vh', margin: '20px' }}>
          <Card.Img style={{minWidth: '50vh', maxWidth: '50vh', minHeight: '50vh', maxHeight: '50vh', objectFit: 'cover'}} src={SH2} onClick={() => window.alert("Hi")}/>
        </Card>
      </CardDeck>
    </div>
  );
}

export default WindowCarousel;

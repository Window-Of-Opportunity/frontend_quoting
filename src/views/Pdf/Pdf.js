import React from 'react';
import file from './out.pdf';
 
function Pdf() {

  return (
    <div fluid style={{ left: "0", right: "0", position: 'fixed', justifyContent: "center", display: "flex", width: "100%", minHeight: "calc(100vh - 56px)"}}>
      <embed src={file} width="100%" minHeight="100vh" />
    </div>
  );
}

export default Pdf;
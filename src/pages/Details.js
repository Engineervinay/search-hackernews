import React from 'react';
import { useState } from 'react';
function Details(props) {
  var Id=props.value;

  
  return (
      <div className='Details'>
        <h1>{props.value}</h1>
      </div>
  );
}

export default Details;
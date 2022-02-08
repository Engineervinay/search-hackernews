import React from 'react';
import { useState,useEffect } from 'react';
function Details(props) {
  
  var [objectDetails,setobjectDetails]=useState([]);
  var [childDetails,setchildDetails]=useState([]);
function getDetails(){
  console.log(props.value);

  const fetchData=async()=>{
    const res= await fetch('http://hn.algolia.com/api/v1/items/'+props.value);
    const json=await res.json();
    setobjectDetails(json);
    setchildDetails(json.children);
  };
  fetchData(); 
  console.log(objectDetails);

} 
  useEffect(()=>{

  getDetails();    

}, [])
  return (
      <div className='Details'>
        <h1>{objectDetails.title}</h1>
        <h3>{objectDetails.points}</h3>
        <div>
        {childDetails.map(item=>(
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
      </div>
  );
}

export default Details;
import React from 'react';
import { useState,useEffect } from 'react';
function Details(props) {
  
  var [objectDetails,setobjectDetails]=useState([]);
function getDetails(){
  

  const fetchData=async()=>{
    const res= await fetch('http://hn.algolia.com/api/v1/items/'+props.value);
    const json=await res.json();
    setobjectDetails(json);
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
        {objectDetails.children.map(item=>(
            <h3>{item.text}</h3>
          ))}
        </div>
      </div>
  );
}

export default Details;
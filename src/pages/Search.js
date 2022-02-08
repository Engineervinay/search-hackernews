import React from 'react';
import { useState,useEffect } from "react";

function Search() {
 
var [userInput,setuserInput]=useState("search text");
var [userOutput,setuserOutput]=useState([]);



function searchChange(event){
  var searchkey=event.target.value;
  setuserInput(searchkey);
 
  console.log("1");
}


function searchOperation(event){
 

  const fetchData=async()=>{
    const res= await fetch('http://hn.algolia.com/api/v1/search?query='+userInput);
    const json=await res.json();
    setuserOutput(json.hits);
  };
  fetchData(); 
 /*
  fetch(url)
  .then(response=>response.json())
  .then(json=>setuserOutput(json))
*/
  console.log(userOutput);
}


  return (
    <div className="Search">
      <input onChange={searchChange} type="text" className="search-bar" placeholder="Search"/>
      <button onClick={searchOperation}>Search</button>

      <div>
        {userOutput.map(item=>(
          <div key={item.ObjectId} value={item.ObjectId}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Search;

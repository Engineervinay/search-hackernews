import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Search(props) {
 
var [userInput,setuserInput]=useState("");//changed the default string
var [userOutput,setuserOutput]=useState([]);
const[loading,setLoading]=useState(false);
let navigate=useNavigate();


function searchChange(event){
  var searchkey=event.target.value;
  setuserInput(searchkey);
 
}


function searchOperation(event){
    if(userInput ==="")
    {
      alert("Please fill the text box");
    }
  else{
    setLoading(true);
  const fetchData=async()=>{
    const res= await fetch('https://hn.algolia.com/api/v1/search?query='+userInput);
    const json=await res.json();
    setuserOutput(json.hits);
    setLoading(false);
  };
  fetchData(); 
 /*
  fetch(url)
  .then(response=>response.json())
  .then(json=>setuserOutput(json))
*/
  console.log(userOutput);
}
}


  return (
    <div className="Search">
      <input onChange={searchChange} type="text" className="search-bar" placeholder="Search"/>
      <button onClick={searchOperation} className="search-button">{!loading ? ('Search'):('loading')}</button>

      <div className='container'>
        {userOutput.map(item=>(
          <div className="element" key={item.objectID} value={item.objectID} onClick={()=>{props.getId(item.objectID);navigate("/Details");} } >
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Search;

import './App.css';
import { useState,useEffect } from "react";
function App() {
var [userInput,setuserInput]=useState("search text");
var [userOutput,setuserOutput]=useState([]);

var url;

function searchChange(event){
  var searchkey=event.target.value;
  setuserInput(searchkey);
  var url="http://hn.algolia.com/api/v1/search?query="+userInput+"&tags=story";
 
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
    <div className="App">
      <input onChange={searchChange} type="text" className="search-bar" placeholder="search"/>
      <button onClick={searchOperation}>Search</button>

      <div>
        {userOutput.map(item=>(
          <div key={item.ObjectId}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from "react";
function App() {
var [userInput,setuserInput]=usestate("search text");
var url;

function searchChange(event){
  var searchkey=event.target.value;
  setuserInput(searchkey);
console.log("hello");
}

function searchOperation(event){
  var url="http://hn.algolia.com/api/v1/search_by_date?query="+userInput;
  console.log(url);
}
  return (
    <div className="App">
      <input onChange={searchChange} type="text" className="search-bar" placeholder="search"/>
      <button onClick={searchOperation}>Search</button>


    </div>
  );
}

export default App;

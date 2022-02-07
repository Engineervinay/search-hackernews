import './App.css';

function App() {

var[searchResult, setsearchResult]=useState("Search Text");
function searchChange(event){
  var userInput=event.target.value;

}


  return (
    <div className="App">
      <input onChange={searchChange} type="text" className="search-bar" placeholder="search"/>
      <button >Search</button>


    </div>
  );
}

export default App;

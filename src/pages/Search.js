import "./Search.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search(props) {
  var [userInput, setuserInput] = useState(""); //changed the default string
  var [userOutput, setuserOutput] = useState([]);

  function searchChange(event) {
    var searchkey = event.target.value;
    setuserInput(searchkey);
  }

  function searchOperation(event) {
    if (userInput === "") {
      alert("Please fill the text box");
    } else {
      const fetchData = async () => {
        const res = await fetch(
          "https://hn.algolia.com/api/v1/search?query=" + userInput
        );

        const json = await res.json();
        console.log(json);
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
  }

  return (
    <div className="container Search">
      <div className="input-group my-4">
        <input
          type="text"
          className="form-control"
          onChange={searchChange}
          placeholder="keyword"
        />
        <button
          className="btn text-light"
          type="button"
          onClick={searchOperation}
        >
          Search
        </button>
      </div>

      <div className="results">
        <ol className="list-group list-group-numbered">
          {userOutput.map((item) => (
            <li
              className="list-group-item"
              key={item.objectID}
              value={item.objectID}
              onClick={() => {
                props.getId(item.objectID);
              }}
            >
              <Link to="/Details" className="text-decoration-none">
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;

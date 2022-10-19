import { useState, useEffect } from "react";

function Details(props) {
  const { value } = props;
  var [objectDetails, setobjectDetails] = useState([]);
  var [childDetails, setchildDetails] = useState([]);
  var [isLoading, setisLoading] = useState(false);

  // function getDetails() {
  //   console.log(props.value);
  //   setisLoading(true)
  //   const fetchData = async () => {
  //     const res = await fetch('https://hn.algolia.com/api/v1/items/' + props.value);
  //     const json = await res.json();
  //     setobjectDetails(json);
  //     setchildDetails(json.children);
  //     setisLoading(false)
  //   };

  //   fetchData();
  //   console.log(objectDetails);

  // }

  useEffect(() => {
    console.log(value);
    setisLoading(true);

    fetch("https://hn.algolia.com/api/v1/items/" + value)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setobjectDetails(data);
        setchildDetails(data.children);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, [value]);

  function convertHTMLToPlain(html) {
    let temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = html;
    let elChildrenCollection = temporaryElement.children;

    let children = [];

    for (let child of elChildrenCollection) {
      children.push(child);
    }

    let values = "";
    // for each child return their textcontent or innertext or ""
    children.forEach(function (child) {
      values += child.innerText || child.textContent || "";
      return values;
    });

    return values;
    // return elChildrenItems.textContent || elChildrenItems.innerText || "";
  }

  let convertedHTML = childDetails.map((item) => {
    return convertHTMLToPlain(item.text);
  });
  return (
    <>
      {isLoading ? (
        <p className="fs-3 text-center mt-4">Loading...</p>
      ) : (
        <div className="Details">
          <h1 className="fst-italic">{objectDetails.title}</h1>
          <h3 className="points">Points:{objectDetails.points}</h3>
          <div className="comments">
            <h3 className="mt-2">Comments</h3>
            <ol className="list-group list-group-numbered">
              {childDetails.map(
                (item, id) => (
                  <li key={item.id} className="list-group-item">
                    {convertedHTML[id]}
                  </li>
                )

                // <div className="comment" key={item.id}>{item.text}</div>
              )}
            </ol>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;

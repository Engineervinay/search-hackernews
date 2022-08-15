import { useState, useEffect } from 'react';


function Details(props) {
  const { value } = props
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
    setisLoading(true)

    fetch('https://hn.algolia.com/api/v1/items/' + value)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setobjectDetails(data);
        setchildDetails(data.children);
        setisLoading(false)
      })
      .catch(error => console.log(error))
  }, [value])


  return (
    <>
      {isLoading
        ?
        <p className='fs-3 text-center mt-4'>Loading...</p>
        :
        <div className='Details'>
          <h1 className='fst-italic'>{objectDetails.title}</h1>
          <h3 className='points'>Points:{objectDetails.points}</h3>
          <div className='comments'>
            <h3 className='mt-2'>Comments</h3>
            <ol className="list-group list-group-numbered">
              {childDetails.map(item => (
                // <div className="comment" key={item.id}>{item.text}</div>

                <li key={item.id} className="list-group-item">
                  {item.text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      }
    </>
  );
}

export default Details;
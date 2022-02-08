import './App.css';
import { useState } from 'react';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Search from "./pages/Search";
import Details from './pages/Details';
function App() {
  var [ObjectId,setObjectId]=useState();
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Search getId={objectID=> setObjectId(objectID) }/>}></Route>
          <Route path="/Details" element={<Details value={ObjectId}/>}></Route>
        </Routes>
      </Router>
    );
}

export default App;

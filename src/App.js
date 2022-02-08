import './App.css';

import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Search from "./pages/Search";
import Details from './pages/Details';
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Search/>}></Route>
          <Route path="/Details" element={<Details/>}></Route>
        </Routes>
      </Router>
    );
}

export default App;

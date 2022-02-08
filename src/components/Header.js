import React from 'react';
import {useNavigate} from "react-router-dom";
function Header() {
    let navigate=useNavigate();
  return( 
  <div className='Header'>
<h1 onClick={()=>navigate('/')}>HackerNews</h1>

  </div>
  );
}

export default Header;


import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid">
        <Link to='/' className='text-decoration-none navbar-brand mx-auto fw-bold'>
          HackerNews
        </Link>
      </div>
    </nav>
  );
}

export default Header;


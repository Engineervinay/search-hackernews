import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
      <nav class="navbar navbar-dark">
        <div class="container-fluid">
        <Link to='/' className='text-decoration-none navbar-brand mx-auto fw-bold'>
            HackerNews
          </Link>
        </div>
      </nav>
  );
}

export default Header;


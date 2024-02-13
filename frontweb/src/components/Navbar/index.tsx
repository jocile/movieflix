import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-warning main-nav">
      <div className="container-fluid">
        <div>
        <Link to="/" className="nav-logo-text">
            <h1>MovieFlix</h1>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <a href="link">SAIR</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
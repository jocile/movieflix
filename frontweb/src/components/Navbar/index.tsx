import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-warning main-nav">
      <div className="container-fluid">
        <div>
          <a href="link">
            <h1 className="nav-logo-text">MovieFlix</h1>
          </a>
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
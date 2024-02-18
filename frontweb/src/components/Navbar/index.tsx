import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from 'util/auth';
import { Link } from 'react-router-dom';
import ButtonLogout from 'components/ButtonLogout';
import history from 'util/history';
import { removeAuthData } from 'util/requests';

import './styles.css';


const Navbar = () => {

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };


  return (
    <nav className="navbar bg-warning main-nav">
      <div className="container-fluid">
        <div>
          <Link to="/" className="nav-logo-text">
            <h1>MovieFlix</h1>
          </Link>
        </div>
        <div>
        {authContextData.authenticated ? (
            <a href="#logout" onClick={handleLogoutClick}>
              <ButtonLogout />
            </a>
          ) : ([])}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
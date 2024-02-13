import { ReactComponent as HomeImage } from 'assets/images/main-image.svg';
import Login from './Login';

import './styles.css';

const Home = () => {
  return (
      <div className="home-container">
        <div className="home-banner-container">
          <h1>Avalie Filmes</h1>
          <p>Diga o que você achou do seu filme favorito</p>
          <HomeImage />
        </div>
        <div className="home-form-container">
          <Login />
        </div>
      </div>
  );
};

export default Home;

import { Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import MovieCatalog from 'pages/Private/MovieCatalog';
import history from 'util/history';
import PrivateRoute from 'components/PrivateRoute';

const AppRoutes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <MovieCatalog />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default AppRoutes;

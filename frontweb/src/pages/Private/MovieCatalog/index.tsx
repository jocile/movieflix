import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';

import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="catalog-container">
      <h1>Tela listagem de filmes</h1>
      <div>
        <Link to="/movies/1">
           <p>Acessar /movies/1</p>
        </Link>
        <Link to="/movies/2">
           <p>Acessar /movies/2</p>
        </Link>
      </div>
    </div>
  );
};

export default MovieCatalog;

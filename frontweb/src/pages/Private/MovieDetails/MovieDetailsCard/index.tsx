import { Movie } from 'types/movie';
import { useState, useEffect } from 'react';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

type Props = {
  movieId: String;
};

const MovieDetailsCard = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="row">
      <div className="col-xl-6">
        <div className="img-container">
          <img
            src={movie?.imgUrl}
            alt={movie?.title}
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="title-year-subtitle-container">
          <h1>{movie?.title}</h1>
          <h6>{movie?.year}</h6>
          <p>{movie?.subTitle}</p>
        </div>
        <div className="movie-synopsis-container">
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;

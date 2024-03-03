import './styles.css';

import { Movie } from 'types/movie';

type Props = {
    movies: Movie;
}

const MovieCatalogCard = ( { movies } : Props) => {
    return (
        <div className="base-card movie-catalog-card">
            <div className="card-top-container">
                <img src={movies.imgUrl} alt={movies.title} />
            </div>
            <div className="card-bottom-container">
                <h1>{movies.title}</h1>
                <h6>{movies.year}</h6>
                <p>{movies.subTitle}</p>
            </div>
        </div>
    )
}

export default MovieCatalogCard;
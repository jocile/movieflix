import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';
import MovieDetailsCard from './MovieDetailsCard';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="details-contanier">
      <div className="base-card details-content-contanier">
        <MovieDetailsCard movieId={movieId} />
      </div>

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="base-card review-content-contanier">
          <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
        </div>
      )}

      <div className="base-card review-listing-content-contanier">
        <ReviewListing reviews={reviews} />
      </div>
    </div>
  );
};

export default MovieDetails;

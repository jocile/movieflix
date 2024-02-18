import { ReactComponent as StarIcon } from 'assets/images/star.svg';
import { Review } from 'types/review';

import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <>
      {reviews.map((item) => (
        <>
        <div className="user-card">
          <StarIcon />
          <h6 key={item.id}>{item.user.name}</h6>
        </div>
        <div className="review-card">
          <p key={item.id}>{item.text}</p>
        </div>
        </>
      ))}
    </>
  );
};

export default ReviewListing;

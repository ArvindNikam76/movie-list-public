import { useMemo } from "react";
import { getAverageRating } from "./Rating";
import { RatingI } from "../../interfaces/RatingInterface";

type PropsRating = {
  ratings: RatingI[] | null;
  isOnlyStar: boolean;
};
const Rating = ({ ratings, isOnlyStar }: PropsRating) => {
  const avarageRating: number | null = useMemo(
    () => getAverageRating(ratings),
    [ratings]
  );
  if (!isOnlyStar) {
    return (
      <div className="rating-container">
        {avarageRating ? (
          <div>
            {[...Array(avarageRating)].map((e, i) => {
              return <span key={i} className="fa fa-star checked"></span>;
            })}
            {[...Array(10 - avarageRating)].map((e, i) => {
              return <span key={i} className="fa fa-star"></span>;
            })}
          </div>
        ) : (
          <span>Sorry no rating available for this movie</span>
        )}
        {ratings &&
          ratings.map((rating) => {
            return (
              <div key={rating.Source} className="rating">
                {rating.Source}: {rating.Perc}
              </div>
            );
          })}
      </div>
    );
  } else {
    return avarageRating ? (
      <div>
        {[...Array(avarageRating)].map((e, i) => {
          return <span key={i} className="fa fa-star checked"></span>;
        })}
        {[...Array(10 - avarageRating)].map((e, i) => {
          return <span key={i} className="fa fa-star"></span>;
        })}
      </div>
    ) : (
      <span>Rating not available</span>
    );
  }
};

export default Rating;

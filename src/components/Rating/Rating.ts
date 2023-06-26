import { RatingI } from "../../interfaces/RatingInterface";

export const getAverageRating = (ratings: RatingI[] | null): number | null => {
  const totalCount = ratings?.length ? ratings?.length : 0;
  let totalRatingCount = 0;

  if (ratings && ratings?.length > 0) {
    totalRatingCount = ratings.reduce((prev, curr) => {
      if (curr.Value) {
        return prev + curr.Value;
      }
      return prev;
    }, totalRatingCount);
    return Number((totalRatingCount / totalCount).toFixed(0));
  } else return null;
};

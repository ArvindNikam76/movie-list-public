import { SortBy } from "../../interfaces/RatingInterface";
import { MovieT } from "../../interfaces/MoviesInterface";

export const sortMovies = (movies: MovieT[], sortBy: SortBy): MovieT[] => {
  const sortedMovies = movies.sort((movieA, movieB) => {
    if (sortBy === "release_date") {
      const yearA = movieA[sortBy].split("-")[0];
      const yearB = movieB[sortBy].split("-")[0];
      return Number(yearA) - Number(yearB);
    }
    return Number(movieA[sortBy]) - Number(movieB[sortBy]);
  });
  return [...sortedMovies];
};

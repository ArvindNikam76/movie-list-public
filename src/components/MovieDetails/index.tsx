import { MovieDetailsProps } from "./MovieDetails.d";
import Rating from "../Rating";
import { getRoman } from "../../utils/util";

const MovieDetails = ({ movieDetails, poster, ratings }: MovieDetailsProps) => {
  if (movieDetails) {
    return (
      <div className="movie-details">
        <div className="datials-title">
          {`Episode ${getRoman(Number(movieDetails.episode_id))} - ${
            movieDetails.title
          }`}
        </div>
        <div>
          {poster && <img alt={poster} src={poster}></img>}
          <div className="datials-story">{movieDetails.opening_crawl}</div>
          <div className="datials-story">
            Directed By: {movieDetails.director}
          </div>
        </div>
        {ratings && <Rating ratings={ratings} isOnlyStar={false} />}
      </div>
    );
  }
  return (
    <div className="movie-details">
      Please click on Movie from List to see details
    </div>
  );
};

export default MovieDetails;

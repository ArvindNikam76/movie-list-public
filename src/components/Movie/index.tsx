import { useEffect, useState } from "react";
import Rating from "../Rating";
import { getFormattedRating, getRoman } from "../../utils/util";
import { RatingI } from "../../interfaces/RatingInterface";

type MovieProps = {
  name: string;
  episode: number;
  date: string;
  onMovieClick: Function;
};
const Movie = ({ name, episode, date, onMovieClick }: MovieProps) => {
  const [ratings, setRatings] = useState<Array<RatingI>>([]);

  const fetchMoviesRating = (name: string) => {
    fetch(`https://www.omdbapi.com/?apikey=b9a5e69d&t=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRatings(getFormattedRating(data.Ratings));
      });
  };

  useEffect(() => {
    fetchMoviesRating(name);
  }, [name]);

  return (
    <tr
      className="movie"
      id={`movie-${episode}`}
      onClick={() => {
        onMovieClick(episode);
      }}
    >
      <td className="episode">EPISODE {episode} </td>
      <td className="title">
        Episode {getRoman(Number(episode))} - {name}{" "}
      </td>
      <td className="ratingTd">
        <Rating ratings={ratings} isOnlyStar />
      </td>
      <td className="date">{date}</td>
    </tr>
  );
};

export default Movie;

import { useEffect, useState } from "react";
import Movie from "../Movie";
import { fetchMovieList } from "../../utils/server";
import MovieDetails from "../MovieDetails";
import Filter from "../Filter";
import Search from "../Search";
import { sortMovies } from "./MovieList";
import { getFormattedRating } from "../../utils/util";
import { MovieT } from "../../interfaces/MoviesInterface";
import { RatingI, SortBy } from "../../interfaces/RatingInterface";

let tempMovilist: MovieT[] = [];
let _movieDetails: MovieT | null = null;

const MovieList = () => {
  const [originalMovies, setOriginalMovies] = useState(tempMovilist);
  const [movies, setMovies] = useState(tempMovilist);
  const [movieDetails, setMovieDetails] = useState(_movieDetails);
  const [loading, setLoading] = useState(false);
  const [poster, setPoster] = useState(null);
  const [ratings, setRatings] = useState<Array<RatingI>>([]);

  useEffect(() => {
    setLoading(true);
    fetchMovieList()
      .then((movieList) => {
        setLoading(false);
        setMovies(movieList);
        setOriginalMovies(movieList);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const handleMovieSelect = (id: number) => {
    const filterMovieDetails =
      movies.find((movie) => {
        return movie.episode_id === id;
      }) || null;

    fetchMovieDetails(filterMovieDetails);
    setMovieDetails(filterMovieDetails);
  };

  const fetchMovieDetails = (movieDetails: MovieT | null) => {
    fetch(`https://www.omdbapi.com/?apikey=b9a5e69d&t=${movieDetails?.title}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPoster(data.Poster);
        setRatings(getFormattedRating(data.Ratings));
      });
  };
  const getMovies = () => {
    if (movies.length) {
      return movies.map((movie) => {
        return (
          <Movie
            onMovieClick={handleMovieSelect}
            name={movie.title}
            episode={movie.episode_id}
            date={movie.release_date}
          />
        );
      });
    }
    return <div>No movies to show</div>;
  };

  const handleMovieSearch = (searhQuery: string) => {
    let filterMovies: MovieT[] = [];
    if (searhQuery) {
      filterMovies = originalMovies.filter((movie) => {
        let moviename: string = movie.title;
        return moviename.toLowerCase().includes(searhQuery);
      });
      setMovies(filterMovies);
    } else {
      setMovies(originalMovies);
    }
  };

  const handleMovieSort = (sort: SortBy) => {
    setMovies(sortMovies(originalMovies, sort));
  };

  return (
    <div className="movies-container">
      <div className="filter-container">
        <Filter onFilterChange={handleMovieSort} />
        <Search onSearch={handleMovieSearch} />
      </div>
      {loading ? (
        <div className="laoding">we are fetching data for you...</div>
      ) : (
        <div className="movies-section">
          {movies.length ? (
            <table className="movie-list">{getMovies()}</table>
          ) : null}
          {
            <MovieDetails
              movieDetails={movieDetails}
              ratings={ratings}
              poster={poster}
            />
          }
        </div>
      )}
    </div>
  );
};

export default MovieList;

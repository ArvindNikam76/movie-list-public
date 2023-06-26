import { RatingI } from "../MovieList/MovieList.d";

export interface MovieDetails {
  episode_id: number;
  title: string;
  director: string;
  opening_crawl: string;
}

export type MovieDetailsProps = {
  movieDetails: MovieDetails | null;
  poster: string | null;
  ratings: RatingI[] | null;
};

export type SortBy = "episode_id" | "release_date";

export interface RowRating {
  Source: string;
  Value: string;
}

export interface RatingI {
  Source: string;
  Perc: string;
  Value: number;
}

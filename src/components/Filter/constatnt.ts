import { SortBy } from "../../interfaces/RatingInterface";

interface Sort_By {
  episodeId: SortBy;
  releasedate: SortBy;
}
export const SORT_BY: Sort_By = {
  episodeId: "episode_id",
  releasedate: "release_date",
};

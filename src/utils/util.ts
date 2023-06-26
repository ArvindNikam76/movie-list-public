import { RATE_PROVIDERS } from "../components/MovieDetails/constant";
import { RatingI, RowRating } from "../interfaces/RatingInterface";
const romanNumbers = [
  { 1: "I" },
  { 2: "II" },
  { 3: "III" },
  { 4: "IV" },
  { 5: "V" },
  { 6: "VI" },
  { 7: "VII" },
  { 8: "VIII" },
  { 9: "IX" },
  { 10: "X" },
];

export const getFormattedRating = (rowRatings: RowRating[]): RatingI[] => {
  let formattedRatings: RatingI[] = [];
  if (rowRatings) {
    formattedRatings = rowRatings.map((rating) => {
      if (rating.Source === RATE_PROVIDERS.imdb) {
        const values = rating.Value.split("/");
        const perc = (Number(values[0]) / Number(values[1])) * 100;
        return {
          Source: RATE_PROVIDERS.imdb,
          Perc: perc.toFixed(0) + "%",
          Value: Number(values[0]),
        };
      }
      if (rating.Source === RATE_PROVIDERS.metacritic) {
        const values = rating.Value.split("/");
        const Perc = values[0] + "%";
        const Value = Number(values[0]) / 10;
        return {
          Source: RATE_PROVIDERS.metacritic,
          Perc,
          Value,
        };
      }
      return {
        Source: RATE_PROVIDERS.rotten,
        Perc: rating.Value,
        Value: Number(rating.Value.replace("%", "")) / 10,
      };
    });
  }
  return formattedRatings;
};

export const getRoman = (episode: number): string | number => {
  if (episode > 10) return episode;
  return Object.values(romanNumbers[episode - 1])[0];
};

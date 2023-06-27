import { getFormattedRating, getRoman } from "./util";

const rowRatings = [
  {
    Source: "Internet Movie Database",
    Value: "8.7/10",
  },
  {
    Source: "Rotten Tomatoes",
    Value: "94%",
  },
  {
    Source: "Metacritic",
    Value: "82/100",
  },
];

const formattedRatings = [
  {
    Source: "Internet Movie Database",
    Perc: "87%",
    Value: 8.7,
  },
  {
    Source: "Rotten Tomatoes",
    Perc: "94%",
    Value: 9.4,
  },
  {
    Source: "Metacritic",
    Perc: "82%",
    Value: 8.2,
  },
];

describe("Utils", () => {
  it("getRoman should return roman number", () => {
    const roman = getRoman(1);
    expect(roman).toBe("I");
  });

  it("getRoman should not return roman number", () => {
    const roman = getRoman(11);
    expect(roman).toBe(11);
  });

  it("getFormattedRating should format rating", () => {
    const returnValue = getFormattedRating(rowRatings);
    expect(returnValue).toStrictEqual(formattedRatings);
  });
});

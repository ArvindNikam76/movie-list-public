import MovieList from ".";
import { sortMovies } from "./MovieList";
import Enzyme, { mount } from "enzyme";
import * as Utils from "../../utils/server";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { waitFor } from "@testing-library/react";
Enzyme.configure({ adapter: new Adapter() });

// import MovieList from "./index";

const movieList = [
  {
    title: "abcd",
    episode_id: 3,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
  {
    title: "abcd",
    episode_id: 5,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
  {
    title: "abcd",
    episode_id: 2,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
  {
    title: "abcd",
    episode_id: 1,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
  {
    title: "abcd",
    episode_id: 4,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
];

const expectedSortedMovies = [
  {
    title: "abcd",
    episode_id: 1,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
  {
    title: "abcd",
    episode_id: 2,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
  {
    title: "abcd",
    episode_id: 3,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
  {
    title: "abcd",
    episode_id: 4,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
  {
    title: "abcd",
    episode_id: 5,
    director: "abcd",
    opening_crawl: "test",
    release_date: "12-12-2023",
  },
];
describe("Test Movie List componet", () => {
  let fetchMovieDetailsSpy = jest
    .spyOn(Utils, "fetchMovieList")
    .mockImplementation(() => Promise.resolve(movieList));

  beforeEach(() => {
    fetchMovieDetailsSpy = jest
      .spyOn(Utils, "fetchMovieList")
      .mockImplementation(() => Promise.resolve(movieList));
  });

  test("sortMovies should sort movies by id", () => {
    const sortedMovies = sortMovies(movieList, "episode_id");
    expect(sortedMovies).toStrictEqual(expectedSortedMovies);
  });

  it("MovieList should call fetchMovieDetailsSpy", async () => {
    const movieList = mount(<MovieList />);
    await waitFor(() => movieList);
    expect(fetchMovieDetailsSpy).toHaveBeenCalled();
    expect(movieList.exists()).toBe(true);
  });
});

export const fetchMovieList = async (): Promise<any> => {
  let movieList: any[] = [];
  // const response = await axios.get("https://swapi.dev/api/films/?format=json");
  const response = await fetch("https://swapi.dev/api/films/?format=json").then(
    (respnse) => respnse.json()
  );
  movieList = response.results;
  return movieList;
};

import Enzyme, { shallow } from "enzyme";
import Movie from ".";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("Moview Details", () => {
  const movieProps = {
    name: "A New Hope",
    episode: 4,
    date: "1977-05-25",
    onMovieClick: () => {},
  };
  const onMovieClickspyOn = jest.spyOn(movieProps, "onMovieClick");
  it("should render movie", () => {
    const movie = shallow(<Movie {...movieProps} />);
    expect(movie.exists()).toBe(true);
  });
  it("should contains td", () => {
    const movie = shallow(<Movie {...movieProps} />);
    expect(movie.find("td").at(3).text()).toBe(movieProps.date);
  });
  it("should have onMovieClickspyOn", () => {
    const movie = shallow(<Movie {...movieProps} />);
    const movieRow = movie.find("tr");
    movieRow.simulate("click");
    expect(onMovieClickspyOn).toHaveBeenCalled();
  });
});

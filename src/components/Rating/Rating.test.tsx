import Enzyme, { shallow } from "enzyme";
import Rating from ".";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

const ratings = [
  {
    Source: "Internet Rating Database",
    Perc: "83%",
    Value: 8,
  },
  {
    Source: "Rotten Tomatoes",
    Perc: "83%",
    Value: 8,
  },
  {
    Source: "Metacritic",
    Perc: "58%",
    Value: 5,
  },
];

describe("Rating component", () => {
  const movieProps1 = {
    ratings: ratings,
    isOnlyStar: true,
  };

  const movieProps2 = {
    ratings: ratings,
    isOnlyStar: false,
  };

  it("should render rating", () => {
    const rating = shallow(<Rating {...movieProps1} />);
    expect(rating.exists()).toBe(true);
  });

  it("should have total 10 star", () => {
    const rating = shallow(<Rating {...movieProps1} />);
    const totalStar = rating.find("span").length;
    expect(totalStar).toBe(10);
  });
  it("should have 7 start", () => {
    const rating = shallow(<Rating {...movieProps1} />);
    const totalStar = rating.find("span").find(".checked").length;
    expect(totalStar).toBe(7);
    const totalPerc = rating.find("div").find(".rating").length;
    expect(totalPerc).toBe(0);
  });
  it("should render percentage", () => {
    const rating = shallow(<Rating {...movieProps2} />);
    const totalStar = rating.find("div").find(".rating").length;
    expect(totalStar).toBe(3);
  });
});

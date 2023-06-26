import Enzyme, { shallow } from "enzyme";
import Search from ".";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("Search", () => {
  const SearchProps = {
    onSearch: () => {},
  };

  it("should render Search Datils", () => {
    const searchComponent = shallow(<Search {...SearchProps} />);
    expect(searchComponent.exists()).toBe(true);
  });

  //   it("should render Search Datils", () => {
  //     const searchComponent = mount(<Search {...SearchProps} />);
  //     const event = {
  //       target: {
  //         value: "episode_id",
  //       },
  //     };
  //     searchComponent.find("input").simulate("change", event);
  //   });
});

import Enzyme, { shallow } from "enzyme";
import Filter from ".";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("Filter", () => {
  const filterProps = {
    onFilterChange: () => {},
  };
  const onFilterClickspyOn = jest.spyOn(filterProps, "onFilterChange");
  it("should render filter Datils", () => {
    const filter = shallow(<Filter {...filterProps} />);
    expect(filter.exists()).toBe(true);
  });

  it("should call onFilterClickspyOn", () => {
    const filter = shallow(<Filter {...filterProps} />);
    const event = {
      target: {
        value: "episode_id",
      },
    };
    filter.find("select").simulate("change", event);
    expect(onFilterClickspyOn).toBeCalled();
  });
  it("should not call onFilterClickspyOn", () => {
    expect(onFilterClickspyOn).not.toBeCalled();
  });
});

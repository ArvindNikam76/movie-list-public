import { getRoman } from "./util";

describe("Utils", () => {
  it("getRoman should return roman number", () => {
    const roman = getRoman(1);
    expect(roman).toBe("I");
  });
});

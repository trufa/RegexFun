import RegexFun from "../index";

describe("Test token functions", () => {
  it("should return literal characters", () => {
    const regex = new RegexFun();
    const literalStr = "thisisexample"
    regex.literal(literalStr);
    expect(regex.getRegexStr()).toEqual(literalStr);
  });
});
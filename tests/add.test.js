import add from "../src/testable/add";
import { expect } from "chai";

describe("add function", () => {
  it("1.1 should return 3 when adding 1 and 2", () => {
    expect(add(1, 2)).to.equal(3);
  });

  it("1.2 should return 3 when adding 2 and 1 (order of arguments)", () => {
    expect(add(2, 1)).to.equal(3);
  });

  it("1.3 should return 10.5 when adding 5.50 and 5", () => {
    expect(add(5.50, 5)).to.equal(10.5);
  });

  it("1.4 should return -1 when adding 1 and -2", () => {
    expect(add(1, -2)).to.equal(-1);
  });

  it("1.5 should return -3 when adding -1 and -2 (double negative)", () => {
    expect(add(-1, -2)).to.equal(-3);
  });

  // TEST_FAILED
  it("1.6 should return undefined when adding 'a' and 'b' (string concatenation)", () => {
    expect(add("a", "b")).to.be.undefined;
  });

  // TEST_FAILED
  it("1.7 should return undefined when adding Number.MAX_VALUE and 1 (overflow)", () => {
    expect(add(Number.MAX_VALUE, 1)).to.be.undefined;
  });

  // TEST_FAILED
  it("1.8 should return undefined when adding 1 and null", () => {
    expect(add(1, null)).to.be.undefined;
  });

  // TEST_FAILED
  it("1.9 should return undefined when adding 1 and undefined", () => {
    expect(add(1, undefined)).to.be.undefined;
  });

  it("1.10 should return 2 when adding 1 and true (true is treated as 1 in JavaScript)", () => {
    expect(add(1, true)).to.equal(2);
  });

  it("1.11 should return undefined when adding two objects", () => {
    expect(add(new Object(), new Object())).to.be.undefined;
  });

  // TEST_FAILED
  it("1.12 should return undefined when adding two arrays [1] and [2] (concatenation)", () => {
    expect(add([1], [2])).to.be.undefined;
  });
});
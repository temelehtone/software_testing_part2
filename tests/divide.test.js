import divide from "../src/testable/divide";
import { expect } from "chai";

describe("divide function", () => {
    it("3.1 should return integer when dividing between integer values", () => {
        expect(divide(4, 2)).to.equal(2);
    });

    it("3.2 should return float ", () => {
        expect(divide(1, 2)).to.equal(0.5);
    });

    it("3.3 should return integer with two floats that result in even division", () => {
        expect(divide(4.5, 1.5)).to.equal(3);
    });

    it("3.4 should return float with values that result in uneven division", () => {
        expect(divide(1, 6)).to.equal(1/6);
    });

    it("3.5 should return negative value with one negative value", () => {
        expect(divide(-4, 2)).to.equal(-2);
    });

    it("3.6 should return positive value with double negative values", () => {
        expect(divide(-4, -2)).to.equal(2);
    });

    // TEST_FAILED
    it("3.7 should return NaN when parameter is string", () => {
        expect(divide("a", 2)).to.be.NaN;
    });

    // TEST_FAILED
    it("3.8 should return NaN with large numbers", () => {
        expect(divide(Number.MAX_VALUE, 0.1)).to.be.NaN;
    });

    // TEST_FAILED
    it("3.9 should return NaN when parameter is null", () => {
        expect(divide(1, null)).to.be.NaN;
    });

    // TEST_FAILED
    it("3.10 should return NaN when parameter is undefined", () => {
        expect(divide(4, undefined)).to.be.NaN;
    });

    // TEST_FAILED
    it("3.11 should return NaN when parameter is boolean", () => {
        expect(divide(true, false)).to.be.NaN;
    });

    // TEST_FAILED
    it("3.12 should return NaN when parameter is object", () => {
        expect(divide(new Object(), 1)).to.be.NaN;
    });

    // TEST_FAILED
    it("3.13 should return NaN when parameter is array", () => {
        expect(divide([], [])).to.be.NaN;
    });

    // TEST_FAILED
    it("3.14 should return NaN when parameter is zero", () => {
        expect(divide(1, 0)).to.be.NaN;
    });
});
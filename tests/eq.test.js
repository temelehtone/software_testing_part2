import eq from "../src/testable/eq";
import { expect } from "chai";

describe("eq function", () => {
    it("4.1 should return true when integer values are same", () => {
        expect(eq(1, 1).to.equal(true));
    });

    it("4.2 should return false when integer values are different", () => {
        expect(eq(1, 2).to.equal(false));
    });

    it("4.3 should return correct value when order of values are swapped", () => {
        expect(eq(2, 1).to.equal(false));
    });

    it("4.4 should return true when string values are same", () => {
        expect(eq("abc", "abc").to.equal(true));
    });

    it("4.5 should return false when string values are different", () => {
        expect(eq("abc", "def").to.equal(false));
    });

    it("4.6 should return false when float values are different", () => {
        expect(eq(5.50, 5).to.equal(false));
    });

    it("4.7 should return true when boolean values are same", () => {
        expect(eq(true, true).to.equal(true));
    });

    it("4.8 should return true when both values are undefined", () => {
        expect(eq(undefined, undefined).to.equal(true));
    });

    it("4.9 should return true when both values are null", () => {
        expect(eq(null, null).to.equal(true));
    });

    it("4.10 should return true when arrays are same", () => {
        expect(eq([1], [1]).to.equal(true));
    });

    it("4.11 should return false when arrays are different", () => {
        expect(eq([1], [1, 2]).to.equal(false));
    });

    it("4.12 should return false in case of negative and positive numeral", () => {
        expect(eq(1, -1).to.equal(false));
    });
});
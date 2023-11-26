import compact from "../src/testable/compact";
import { expect } from "chai";

describe("compact function", () => {
    it("2.1 should return [1, 2] with integer values in array", () => {
        expect(compact([1, 0, 2]).to.equal([1, 2]));
    });

    it("2.2 should return array without zero values with boolean value false", () => {
        expect(compact([1, 2, false]).to.equal([1, 2]));
    });

    it("2.3 should return [1, 2, true] with boolean value true", () => {
        expect(compact([1, 2, true]).to.equal([1, 2, true]));
    });

    it("2.4 should not return an empty string value with empty string in array", () => {
        expect(compact(["", 1).to.equal([1]));
    });

    it("2.5 should return string with non-empty string in array", () => {
        expect(compact(["abc", 1]).to.equal(["abc", 1]));
    });

    //TEST_FAILED
    it("2.6 should return NaN with undefined value in array", () => {
        expect(compact([undefined]).to.be.NaN;
    });

    it("2.7 should return [] with empty array", () => {
        expect(compact([]).to.equal([]));
    });

    it("2.8 should return [] nested empty array", () => {
        expect(compact([[], []]).to.equal([]));
    });

    it("2.9 should return [object] with object in array", () => {
        const obj = compact([new Object()]);
        expect(compact([obj]).to.deep.equal([obj));
    });

    // TEST_FAILED
    it("2.10 should throw error with non-array", () => {
        expect(compact("abc").to.be.NaN;
    });
});
import reduce from "../src/testable/reduce";
import { expect } from "chai";

describe("reduce function", () => {
    const arr = [1,2,3]
    const iter = (sum, n) => sum + n
    const acc = 0

    it("7.1 should return sum", () => {
        expect(reduce(arr, iter, acc)).to.equal(6);
    });

    it("7.2 should return empty collection if first parameter is empty array or object", () => {
        expect(reduce([], iter, acc)).to.equal([]);
    });

    it("7.3 should return undefined when first parameter is not an array or object", () => {
        expect(reduce(123, iter, acc)).to.be.undefined;
    });

    it("7.4 should throw error when second parameter is not a function", () => {
        expect(() => reduce([1, 2, 3], "a", acc)).to.throw();
    });

    it("7.5 should return value if third parameter left empty", () => {
        expect(reduce([1, 2, 3], iter)).to.equal(6);
    });

    it("7.6 should return undefined when third parameter is string", () => {
        expect(reduce([1, 2, 3], iter, "a")).to.be.undefined;
    });

    it("7.6.1 should return undefined when third parameter is object", () => {
        expect(reduce([1, 2, 3], iter, new Object())).to.be.undefined;
    });

    it("7.6.2 should return undefined when third parameter is boolean", () => {
        expect(reduce([1, 2, 3], iter, false)).to.be.undefined;
    });
});
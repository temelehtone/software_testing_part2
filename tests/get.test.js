import get from "../src/testable/get";
import { expect } from "chai";

describe("get function", () => {
    it("6.1 should return value when the first parameter is a nested property", () => {
        const object = { 'a': 4 };
        expect(get(object, 'a')).to.equal(4);
    });

    it("6.2 should return undefined when the first parameter has a non-nested property", () => {
        const object = { a: 1, 'b': 'a', c: false };
        expect(get(object, '0')).to.be.undefined;
    });

    it("6.3 should return undefined when the first parameter has a nonexistent nested property and the third parameter is not defined", () => {
        const object = { 'a': 'value' };
        expect(get(object, 'b')).to.equal(undefined);
    });

    it("6.4 should return undefined when the first parameter is null", () => {
        expect(get(null, 'a')).to.be.undefined;
    });

    it("6.5 should return value when the first parameter is an array", () => {
        const object = { 'a': [1, 2, 3] };
        expect(get(object, 'a[1]')).to.equal(2);
    });

    it("6.6 should return undefined when the first parameter is a string", () => {
        const path = 'a';
        expect(get("a", path)).to.be.undefined;
    });

    it("6.7 should return value when the second parameter is a string", () => {
        const object = { 'a': { 'b': { 'c': 4 } } };
        expect(get(object, 'a.b.c')).to.equal(4);
    });

    it("6.8 should return value when the second parameter is an array", () => {
        const object = { 'a': { 'b': { 'c': 2 } } };
        expect(get(object, ['a', 'b', 'c'])).to.equal(2);
    });

    it("6.9 should return undefined when the second parameter is not an array or string", () => {
        const object = { 'a': { 'b': { 'c': 2 } } };
        expect(get(object, 1)).to.be.undefined;
        expect(get(object, true)).to.be.undefined;
        expect(get(object, false)).to.be.undefined;
    });

    it("6.10 should return value when the second parameter path is undefined, and the third parameter exists", () => {
        const object = {};
        expect(get(object, "a.b.c", "def")).to.equal("def");
    });

    it("6.11 should return undefined when the second parameter path is undefined, and the third parameter is undefined", () => {
        const object = { 'a': 2 };
        expect(get(object, 'b')).to.equal(undefined);
    });
});

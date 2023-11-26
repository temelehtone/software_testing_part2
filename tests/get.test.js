import get from "../src/testable/get";
import { expect } from "chai";

describe("get function", () => {
    it("6.1 should return value when first parameter is nested property", () => {
        const object = { 'a': 4 }
        expect(get(object, 'a').to.equal(4));
    });

    // TEST_FAILED
    it("6.2 should throw error when first parameter has non-nested property", () => {
        const object = {1,  'a', false }
        expect(get(object, '0').to.be.NaN);
    });

    it("6.3 should return undefined when first parameter has inexistent nested property and third parameter is not defined", () => {
        const object = { 'a' = value }
        expect(get(object, 'a').to.equal(undefined));
    });

    // TEST_FAILED
    it("6.4 should throw error when first parameter is null", () => {
        expect(get(null, 'a').to.be.NaN);
    });

    it("6.5 should return value when first parameter is array", () => {
        const object = {'a': [ 1, 2, 3 ] }
        expect(get(object, 'a[1]').to.equal(2));
    });

    // TEST_FAILED
    it("6.6 should throw error when first parameter is string", () => {
        const path = 'a';
        expect(get("a", 'a').to.be.NaN);
    });

    it("6.7 should return value when second parameter is string", () => {
        const object = { 'a': ['b': {'c' : 4} ]}
        expect(get(object, 'a.b.c').to.equal(4));
    });

    it("6.8 should return value when second parameter is array", () => {
        const object = { 'a': ['b': {'c' : 2} ]}
        expect(get(object, ['a', 'b', 'c'])).to.equal(2));
    });

    // TEST_FAILED
    it("6.9 should throw error when second parameter is not array or string", () => {
        const object = { 'a': ['b': {'c' : 2} ]}
        expect(get(object, 1).to.be.NaN);
        expect(get(object, true).to.be.NaN);
        expect(get(object, false).to.be.NaN);
    });

    it("6.10 should return value when second parameter path is undefined and third parameter exists", () => {
        const object = {}
        expect(get(object, "a.b.c", "def").to.equal("def"));
    });

    it("6.11 should return undefined when second parameter path is undefined and third parameter is undefined", () => {
        const object = { 'a' = 2 }
        expect(get(object, 'b').to.equal(undefined));
    });
});
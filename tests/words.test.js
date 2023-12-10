import words from "../src/testable/words";
import { expect } from "chai";

describe("words function", () => {
    it("10.1 should return array of size 1 when parameter does not contain whitespace", () => {
        expect(words("abc")).to.have.lengthOf(1);
        expect(words("abc")).to.deep.equal(["abc"]);
    });

    it("10.2 should return size 2 array when parameter string contains whitespaces", () => {
        expect(words("abc def")).to.have.lengthOf(2);
        expect(words("abc def")).to.deep.equal(["abc", "def"]);
    });

    it("10.3 should return empty array when string contains only whitespaces", () => {
        expect(words("       ")).to.have.lengthOf(0);
        expect(words("       ")).to.deep.equal([]);
    });

    it("10.4 should return size 2 when parameter contains newline character", () => {
        expect(words("ab\ncd")).to.have.lengthOf(2);
        expect(words("ab\ncd")).to.deep.equal(["ab", "cd"]);
    });

    it("10.5 should return size 2array when parameter contains tab character", () => {
        expect(words("ab\tcd")).to.have.lengthOf(2);
        expect(words("ab\tcd")).to.deep.equal(["ab", "cd"]);
    });

    it("10.6 should throw error with non-string values", () => {
        expect(() => words(1)).to.throw();
        expect(() => words(true)).to.throw();
        expect(() => words([])).to.throw();
        expect(() => words(new Object())).to.throw();
        expect(() => words(undefined)).to.throw();
    });
});
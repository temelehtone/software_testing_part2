import toString from "../src/testable/toString";
import { expect } from "chai";

describe("toString function", () => {
    it("9.1 should return value when parameter is string", () => {
        expect(toString("Hi")).to.equal("Hi");
    });

    it("9.2 should return empty string when parameter is null", () => {
        expect(toString(null)).to.equal("");
    });

    it("9.3 should return value when parameter is number", () => {
        expect(toString(-2)).to.equal("-2");
    });

    it("9.4 should return value when parameter is array", () => {
        expect(toString([1, 2])).to.equal("1,2");
    });

    it("9.5 should return value when parameter is object", () => {
        expect(toString({value: 2})).to.equal("[object Object]");
    });

    it("9.6 should return value when parameter is boolean", () => {
        expect(toString(true)).to.equal("true");
    });

    it("9.7 should return empty string when parameter is undefined", () => {
        expect(toString(undefined)).to.equal("");
    });

    it("9.8 should return empty string when parameter is empty array", () => {
        expect(toString([])).to.equal("");
    });

    it("9.9 should return value when parameter is char", () => {
        expect(toString('a')).to.equal("a");
    });

    it("9.10 should return value when parameter is decimal", () => {
        expect(toString(3.14)).to.equal("3.14");
    });

    it("9.10 should return value when parameter is decimal", () => {
        expect(toString(3.14)).to.equal("3.14");
    });

    it("9.11 should return value when parameter has sign (-)", () => {
        expect(toString(-0)).to.equal("-0");
    });

    it("9.12 should return value when parameter is Symbol", () => {
        expect(toString(Symbol("hello"))).to.equal("Symbol(hello)");
    });

    it("9.13 should return joined values when parameter is array including array", () => {
        expect(toString([1, [1, 3]])).to.equal("1,1,3");
    });

    it("9.14 should return joined values where undefined value is empty string", () => {
        expect(toString([1, true, null, "hello", undefined])).to.equal("1,true,,hello,");
    });
});
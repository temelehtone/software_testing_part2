import toNumber from "../src/testable/toNumber";
import { expect } from "chai";

describe("toNumber function", () => {
    it("8.1 should return number when parameter is integer", () => {
        expect(toNumber(42)).to.equal(42);
    });

    it("8.2 should return number when parameter is decimal", () => {
        expect(toNumber(3.14)).to.equal(3.14);
    });

    it("8.3 should return number when parameter is binary", () => {
        expect(toNumber("0b1101")).to.equal(13);
    });

    it("8.4 should return number when parameter is hex", () => {
        expect(toNumber(toNumber(0x1A))).to.equal(26);
    });

    it("8.5 should return number when parameter is string", () => {
        expect(toNumber("3.2")).to.equal(3.2);
    });

    it("8.6 should return NaN when parameter is undefined", () => {
        expect(toNumber(undefined)).to.be.NaN;
    });

    it("8.7 should return 0 when parameter is null", () => {
        expect(toNumber(null)).to.equal(0);
    });

    it("8.8 should return NaN when parameter is object", () => {
        const obj = new Object();
        expect(toNumber([obj])).to.be.NaN;
    });

    it("8.9 should return NaN when parameter is array", () => {
        expect(toNumber([1, 2])).to.be.NaN;
    });

    it("8.10 should return 0 when parameter is false", () => {
        expect(toNumber(false)).to.equal(0);
    });

    it("8.11 should return 1 when parameter is true", () => {
        expect(toNumber(true)).to.equal(1);
    });

    it("8.12 should return number when parameter is char", () => {
        expect(toNumber('2')).to.equal(2);
    });

    it("8.13 should return undefined when parameter is overflow", () => {
        expect(toNumber(Number.MAX_VALUE + 1)).to.be.undefined;
    });

    it("8.14 should return NaN when parameter is Symbol", () => {
        expect(toNumber(Symbol("test"))).to.be.NaN;
    });

    it("8.15 should return NaN when parameter is wrong hexadecimal", () => {
        expect(toNumber("0xwrong_hex")).to.be.NaN;
    });

    it("8.16 should return decimal number when parameter is binary", () => {
        expect(toNumber("0b10101010")).to.equal(170);
    });

    it("8.17 should return 0 when parameter is string 0", () => {
        expect(toNumber("0")).to.equal(0);
    });
});
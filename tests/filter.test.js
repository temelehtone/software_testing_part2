import filter from "../src/testable/filter";
import { expect } from "chai";

describe("filter function", () => {

    const arr = [{
      'user': 'bob',
      'active': true
    }, {
      'user': 'john',
      'active': false
    }]
    const predicate = ({active}) => active

    it("5.1 should return correct value when filtered", () => {
        expect(filter(arr, predicate).to.equal([{'user': bob, active: true}]);
    });

    it("5.2 should return empty nested array in case array is null", () => {
        expect(filter(null, predicate).to.equal([[]]));
    });

    it("5.3 should return empty nested array in case array is undefined", () => {
        expect(filter(undefined, predicate).to.equal([[]]));
    });

    it("5.4 should filter odd numbers", () => {
        const arr = [1,2,3]
        const pred = (val) => val % != 0

        expect(filter(arr, pred).to.equal([1, 3]));
    });
});
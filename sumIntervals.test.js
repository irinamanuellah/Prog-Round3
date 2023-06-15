import { describe } from "mocha";
import { sumIntervals } from "./sumIntervals.js";
import { expect } from "chai";

describe("When the input is a normal value", function () {
    it("Should return 4 with the input is [1,5]", function () {
        let input = [[1, 5]]
        let result = 4
        expect(sumIntervals(input)).to.eq(result);
    });
});

describe("When the input is not a normal values", function () {
    it("Return 0 when the input is empty", function () {
        let input = [[0]];
        let result = 0;
        expect(sumIntervals(input)).to.eq(result);
    });
    it("should return 7 when the input is [[1, 4], [7, 10], [3, 5]]", function () {
        let input = [[1, 4], [7, 10], [3, 5]];
        let result = 7;
        expect(sumIntervals(input)).to.eq(result);
    });
})
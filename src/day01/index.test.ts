import { assert } from "chai";
import "mocha";
import {
    day01,
    day01StartFromString,
    solvesTheProblem,
    parseTextFile
} from ".";

describe("Day 01:", () => {
    it("Sums [1, 2, 3] and equal 6", () => {
        assert.equal(day01([1, 2, 3]), 6);
    });

    it("Sums string and equal 6", () => {
        assert.equal(day01StartFromString("+1\n+2\n+3"), 6);
    });

    it("Sums default input and gives answer", () => {
        assert.equal(day01StartFromString(), 474);
    });
});

describe("Day 01B:", () => {
    it("Finds first repeat for -1, 1 which is 0", () => {
        assert.equal(solvesTheProblem([-1, 1]), 0);
    });
    it("Finds first repeat for 2, 1, -1 which is 2", () => {
        assert.equal(solvesTheProblem([2, 1, -1]), 2);
    });
    it("Finds first repeat for 1, -2 which is 2", () => {
        assert.equal(solvesTheProblem([1, -2]), 0);
    });
    it("Finds first repeat for input", () => {
        assert.equal(solvesTheProblem(parseTextFile("input")), 137041);
    });
    it("Finds first repeat for input-ben", () => {
        assert.equal(solvesTheProblem(parseTextFile("input-ben")), 56752);
    });
});

import { assert } from "chai";
import "mocha";
import Day02 from ".";
import * as fs from "fs";

describe("Day 02:", () => {
    describe("Check for letter repeating twice", () => {
        it("should return false for 'a'", () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice("a"), false);
        });
        it("should return true for 'aa'", () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice("aa"), true);
        });
        it("should return true for 'baa'", () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice("baa"), true);
        });
        it("should return true for 'bcaa'", () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice("bcaa"), true);
        });
        it("should return true for 'bacb'", () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice("bacb"), true);
        });
        it("should return false for 'bacbb'", () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice("bacbb"), false);
        });
        it("do checksum", () => {
            const day02 = new Day02();
            const inputWords = ["aa", "aaa", "bb", "bbb", "ccc"];
            assert.equal(day02.doTheCheckSum(inputWords), 6);
        });
        it("do checksum", () => {
            const day02 = new Day02();
            const inputWords = ["aabbb", "aaa", "bb", "bbb", "ccc"];
            assert.equal(day02.doTheCheckSum(inputWords), 8);
        });
        it("do checksum on input-r", () => {
            const day02 = new Day02();
            const inputWords = fs
                .readFileSync("./src/day02/input-r.txt", "UTF-8")
                .split("\n");
            assert.equal(day02.doTheCheckSum(inputWords), 5478);
        });
        it("do checksum on input-b", () => {
            const day02 = new Day02();
            const inputWords = fs
                .readFileSync("./src/day02/input-b.txt", "UTF-8")
                .split("\n");
            assert.equal(day02.doTheCheckSum(inputWords), 5976);
        });
    });
});

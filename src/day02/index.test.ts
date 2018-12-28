import { assert } from 'chai';
import * as fs from 'fs';
import 'mocha';
import Day02 from '.';

xdescribe('Day 02, Part 1:', () => {
    describe('Check for letter repeating twice', () => {
        it('should return false for \'a\'', () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice('a'), false);
        });
        it('should return true for \'aa\'', () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice('aa'), true);
        });
        it('should return true for \'baa\'', () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice('baa'), true);
        });
        it('should return true for \'bcaa\'', () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice('bcaa'), true);
        });
        it('should return true for \'bacb\'', () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice('bacb'), true);
        });
        it('should return false for \'bacbb\'', () => {
            const day02 = new Day02();
            assert.equal(day02.checkForTwice('bacbb'), false);
        });
        it('do checksum', () => {
            const day02 = new Day02();
            const inputWords = ['aa', 'aaa', 'bb', 'bbb', 'ccc'];
            assert.equal(day02.doTheCheckSum(inputWords), 6);
        });
        it('do checksum', () => {
            const day02 = new Day02();
            const inputWords = ['aabbb', 'aaa', 'bb', 'bbb', 'ccc'];
            assert.equal(day02.doTheCheckSum(inputWords), 8);
        });
        it('do checksum on input-r', () => {
            const day02 = new Day02();
            const inputWords = fs
                .readFileSync('./src/day02/input-r.txt', 'UTF-8')
                .split('\n');
            assert.equal(day02.doTheCheckSum(inputWords), 5478);
        });
        it('do checksum on input-b', () => {
            const day02 = new Day02();
            const inputWords = fs
                .readFileSync('./src/day02/input-b.txt', 'UTF-8')
                .split('\n');
            assert.equal(day02.doTheCheckSum(inputWords), 5976);
        });
    });
});

describe('Day 02, part B', () => {
    describe('determine whether two IDs differ in one location', () => {
        it('should find the difference in the first characters', () => {
            const day02 = new Day02;
            const result = day02.hasOneDifference('a', 'b');
            assert.equal(result, true);
        });

        it('should find the difference in the first characters', () => {
            const day02 = new Day02;
            const result = day02.hasOneDifference('a', 'a');
            assert.equal(result, false);
        });

        it('should find two differences in the first two spots', () => {
            const day02 = new Day02;
            const result = day02.hasOneDifference('aa', 'bb');
            assert.equal(result, false);
        });

        it('should compare two 3 character IDs', () => {
            const day02 = new Day02;
            const result = day02.hasOneDifference('abc', 'acd');
            assert.equal(result, false);
        });
        it('should work', () => {
            const day02 = new Day02;
            const result = day02.hasOneDifference('abcde', 'abcdd');
            assert.equal(result, true);
        });
    });
    describe('find the two correct boxes', () => {
        it('should find the ids of the correct boxes', () => {
            const inputWords = fs
                .readFileSync('./src/day02/input-r.txt', 'UTF-8')
                .split('\n');

            const day02 = new Day02;
            const result = day02.findCorrectIds(inputWords);
            assert.equal(result, 'theId');
        });
    });
});

import { assert } from 'chai';
import * as fs from 'fs';
import 'mocha';
import { Day01, DEFAULT_FILEPATH } from '.';

xdescribe('Day 01:', () => {
    it('begins with undefined public properties', () => {
        const day01 = new Day01();
        assert.isUndefined(day01.numbersList, 'property: numbersList');
        assert.isUndefined(day01.inputText, 'property: inputText');
        assert.isUndefined(day01.partAResult, 'property: partAResult');
        assert.isUndefined(day01.partBResult, 'property: partBResult');
    });

    it('can chain calls to parseInputFile', () => {
        const day01 = new Day01();
        day01.parseInputFile().parseInputText();

        assert.deepEqual(day01.numbersList, [-16, 12, -6, -16, 4, 19]);
    });

    it('can chain calls from parseInputFile > parseText > solvePartA', () => {
        const day01 = new Day01();

        assert.doesNotThrow(() =>
            day01
                .parseInputFile()
                .parseInputText()
                .solvePartA()
        );
    });

    it('throws on parseText if no inputText', () => {
        const day01 = new Day01();
        assert.throws(() => day01.parseInputText());
    });

    it('Solves Part A for [-16, 12, -6, -16, 4, 19]', () => {
        const day01 = new Day01();

        day01.numbersList = [-16, 12, -6, -16, 4, 19];
        day01.solvePartA();

        assert.equal(day01.partAResult, -3);
    });

    it('Solves Parts A & B for [4, -2, -3]', () => {
        const day01 = new Day01();

        day01.numbersList = [4, -2, -3];
        day01.solvePartA().solvePartB();

        assert.equal(day01.partAResult, -1, 'part A');
        assert.equal(day01.partBResult, 2, 'part B');
    });

    it('Processes test file by default', () => {
        const day01 = new Day01();
        day01
            .parseInputFile()
            .parseInputText()
            .solvePartA();

        const expectedText = fs.readFileSync(
            DEFAULT_FILEPATH + 'input-test.txt',
            'UTF-8'
        );

        const expectedNumbers = expectedText.split('\n').map(Number);

        assert.equal(day01.inputText, expectedText, 'inputText');
        assert.deepEqual(day01.numbersList, expectedNumbers, 'numbersList');
        assert.equal(day01.partAResult, -3, 'partAResult');
    });

    it('Processes and solves input-b file', () => {
        const day01 = new Day01();
        const INPUT_B_SOLUTION_PART_A = 416;
        const INPUT_B_SOLUTION_PART_B = 56752;

        assert.doesNotThrow(() =>
            day01
                .parseInputFile('input-b.txt')
                .parseInputText()
                .solvePartA()
                .solvePartB()
        );
        assert.isArray(day01.numbersList, 'numbersList');
        assert.equal(day01.partAResult, INPUT_B_SOLUTION_PART_A, 'Part A');
        assert.equal(day01.partBResult, INPUT_B_SOLUTION_PART_B, 'Part B');
    });

    it('Processes and solves input-r file', () => {
        const day01 = new Day01();
        const INPUT_R_SOLUTION_PART_A = 474;
        const INPUT_R_SOLUTION_PART_B = 137041;

        assert.doesNotThrow(() =>
            day01
                .parseInputFile('input-r.txt')
                .parseInputText()
                .solvePartA()
                .solvePartB()
        );
        assert.isArray(day01.numbersList, 'numbersList');
        assert.equal(day01.partAResult, INPUT_R_SOLUTION_PART_A);
        assert.equal(day01.partBResult, INPUT_R_SOLUTION_PART_B);
    });
});

import * as fs from "fs";

export const DEFAULT_FILEPATH = "./src/day01/";
const DEFAULT_FILENAME = "input-test.txt";

const inputText: string = fs.readFileSync(
    DEFAULT_FILEPATH + DEFAULT_FILENAME,
    "UTF-8"
);

export class Day01 {
    inputText?: string;
    numbersList?: number[];
    partAResult?: number;
    partBResult?: number;

    parseInputFile(filename = DEFAULT_FILENAME) {
        this.inputText = fs.readFileSync(DEFAULT_FILEPATH + filename, "UTF-8");

        return this;
    }

    parseInputText() {
        if (!this.inputText) {
            throw new Error("Nothing to parse: no 'inputText'!");
        }

        this.numbersList = this.inputText.split("\n").map(Number);

        return this;
    }

    solvePartA() {
        if (!this.numbersList) {
            throw new Error("No numbersList present!");
        }

        this.partAResult = this.numbersList.reduce(
            (sum: number, numbersListValue: number) => sum + numbersListValue,
            0
        );

        return this;
    }

    solvePartB() {
        if (!this.numbersList) {
            throw new Error("No numbersList present!");
        }

        const seenFrequencies = new Set();
        let currentFrequency = 0;
        let i = 0;

        // no infinite loop protection
        while (!seenFrequencies.has(currentFrequency)) {
            seenFrequencies.add(currentFrequency);

            currentFrequency += this.numbersList[i];

            i++;
            if (i >= this.numbersList.length) {
                i = 0;
            }
        }

        this.partBResult = currentFrequency;

        return this;
    }
}

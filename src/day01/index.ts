const fs = require("fs");

const inputText = fs.readFileSync("./src/day01/input.txt", "UTF-8");

export function day01StartFromString(numbersText: string = inputText): number {
    const numArray = numbersText.split("\n").map(Number);

    let ourAnswer = day01(numArray);

    return ourAnswer;
}

export function day01(numsList: number[]): number {
    return numsList.reduce((sum: number, value: number) => sum + value, 0);
}

export function parseTextFile(fileName: string = "input"): number[] {
    const theNumbers = fs
        .readFileSync(`./src/day01/${fileName}.txt`, "UTF-8")
        .split("\n")
        .map(Number);

    return theNumbers;
}

export function solvesTheProblem(theNumbers: number[]): number {
    const seenFrequencies = new Set();
    let currentFrequency = 0;
    let i = 0;
    let numResets = 0;
    while (!seenFrequencies.has(currentFrequency)) {
        seenFrequencies.add(currentFrequency);
        if (i >= theNumbers.length) {
            i = 0;
            numResets++;
        }
        currentFrequency += theNumbers[i];
        i++;
    }
    console.log("Resets", numResets);

    return currentFrequency;
}

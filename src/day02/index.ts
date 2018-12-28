export default class Day02 {
    checkForTwice (word: string): boolean {
        const letterCounts: any = {};
        for (let i = 0; i < word.length; i++) {
            letterCounts[word[i]] = (letterCounts[word[i]] || 0) + 1;
        }
        for (const letter in letterCounts) {
            if (letterCounts[letter] === 2) return true;
        }

        return false;
    }

    checkForThrice (word: string): boolean {
        const letterCounts: any = {};
        for (let i = 0; i < word.length; i++) {
            letterCounts[word[i]] = (letterCounts[word[i]] || 0) + 1;
        }
        for (const letter in letterCounts) {
            if (letterCounts[letter] === 3) return true;
        }

        return false;
    }

    doTheCheckSum (words: string[]): number {
        let numberOfTwos = 0;
        let numberOfThrees = 0;
        words.forEach(word => {
            if (this.checkForTwice(word)) numberOfTwos++;
            if (this.checkForThrice(word)) numberOfThrees++;
        });

        return numberOfThrees * numberOfTwos;
    }

    hasOneDifference (a: string, b: string): boolean {
        if (a === b) return false;
        let differences = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) differences++;
            if (differences > 1) return false;
        }
        return true;
    }

    findCorrectIds (inputWords: string[]): string {
        for (let i = 0; i < inputWords.length; i++) {
            for (let j = i + 1; j < inputWords.length; j++) {
                if (this.hasOneDifference(inputWords[i], inputWords[j])) {
                    return `${inputWords[i]}:${inputWords[j]}`;
                }
            }
        }
        return 'Correct Boxes Are Not Here!!!';
    }
}

export default class Day02 {
    checkForTwice(word: string): boolean {
        let letterCounts: any = {};
        for (let i = 0; i < word.length; i++) {
            letterCounts[word[i]] = (letterCounts[word[i]] || 0) + 1;
        }
        for (let letter in letterCounts) {
            if (letterCounts[letter] == 2) return true;
        }

        return false;
    }

    checkForThrice(word: string): boolean {
        let letterCounts: any = {};
        for (let i = 0; i < word.length; i++) {
            letterCounts[word[i]] = (letterCounts[word[i]] || 0) + 1;
        }
        for (let letter in letterCounts) {
            if (letterCounts[letter] == 3) return true;
        }

        return false;
    }

    doTheCheckSum(words: string[]): number {
        let numberOfTwos = 0;
        let numberOfThrees = 0;
        words.forEach(word => {
            if (this.checkForTwice(word)) numberOfTwos++;
            if (this.checkForThrice(word)) numberOfThrees++;
        });

        return numberOfThrees * numberOfTwos;
    }
}

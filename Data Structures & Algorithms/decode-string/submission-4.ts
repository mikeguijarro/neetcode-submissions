class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s: string): string {
        const sArr = [...s];

        return this.decodeStringRecursively(sArr).join('');
    }

    decodeStringRecursively(s: string[]): string[] {
        if (s.length === 0) {
            return [];
        }

        let char = s.shift();
        
        const num = Number(char);

        if (!isNaN(num)) {
            // Check if next number is int
            while(!isNaN(Number(s[0]))) {
                char += s.shift();
            }
            const num = Number(char);
            // Is a number
            let openCount = 0;
            let indexDiv = 0;
            for (let i = 0; i < s.length; i++) {
                if (s[i] === "[") {
                    openCount++;
                } else if (s[i] === "]") {
                    openCount--;
                }
                if (openCount === 0) {
                    indexDiv = i;
                    break;
                }
            }

            const bracketedItem = s.slice(1, indexDiv);
            const nextItem = s.slice(indexDiv + 1, undefined);

            let bracketedResponse = this.decodeStringRecursively(bracketedItem);

            bracketedResponse = Array(num).fill(null).flatMap(() => bracketedResponse);

            return [...bracketedResponse, ...this.decodeStringRecursively(nextItem)];
        } else {
            return [char, ...this.decodeStringRecursively(s)];
        }
    }
}

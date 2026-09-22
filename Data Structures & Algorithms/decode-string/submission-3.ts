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
        console.log('/////////////////')
        console.log(s.join(''));
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
            console.log('First char [', num, '] is a number');
            console.log('s:', s.join(''))
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

            console.log('bracketedItem', bracketedItem)
            console.log('nextItem', nextItem)

            let bracketedResponse = this.decodeStringRecursively(bracketedItem);

            bracketedResponse = Array(num).fill(null).flatMap(() => bracketedResponse);
            console.log('bracketedResponse Return:',bracketedResponse)

            return [...bracketedResponse, ...this.decodeStringRecursively(nextItem)];
        } else {
            console.log('First char [', char, '] is a string');
            return [char, ...this.decodeStringRecursively(s)];
        }
    }
}

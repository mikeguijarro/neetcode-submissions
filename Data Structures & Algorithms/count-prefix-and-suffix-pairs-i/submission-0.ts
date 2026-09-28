class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words: string[]): number {
        let counter = 0;
        for (let i = 0; i < words.length; i++) {
            if(i === words.length - 1) {
                continue;
            }
            for (let j = 1 + i; j < words.length; j++) {
                const str1 = words[i];
                const str2 = words[j];

                const isPrefixAndSuffix = this.isPrefixAndSuffix(str1, str2);
                if(isPrefixAndSuffix) {
                    counter++;
                }
            }
        }

        return counter;
    }

    isPrefixAndSuffix(str1: string, str2: string): boolean {
        const strStart = str2.slice(0, str1.length);
        const strEnd = str2.slice(-str1.length, undefined);

        console.log('str1', str1)
        console.log('str2', str2)
        console.log('strStart',strStart)
        console.log('strEnd',strEnd)
        console.log('////////')
        if (strStart === str1 && strEnd === str1) {
            return true;
        }
        return false;
    }
}

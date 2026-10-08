class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const arr = strs.map((str)=> [...str]);
        const dict: Record<string, string[]> = {}
        for(let i = 0; i < arr.length; i++) {
            const wordArr = arr[i];
            const word = wordArr.join('')
            wordArr.sort();
            const key = String(wordArr);
            if(dict[key] === undefined) {
                dict[key] = [word];
            } else {
                dict[key].push(word)
            }
        }

        const response = Object.values(dict).map((items)=> items);
        return response;
    }
}

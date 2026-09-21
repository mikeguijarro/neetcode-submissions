class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words: string[]): boolean {
        const colsArr: string[] = [];

        for (let i = 0; i < words.length; i++) {
            for(let j = 0; j < words[i].length; j++) {
                if(colsArr[j] === undefined) {
                    colsArr[j] = words[i][j]
                } else {
                    colsArr[j] = colsArr[j].concat(words[i][j])
                }
            }
        }

        for(let i = 0; i < words.length; i++) {
            let rowWord = words[i];
            let colWord = colsArr[i];
            
            if(rowWord !== colWord) {
                return false;
            }
        }

        return true;
    }
}

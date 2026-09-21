class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        const sArr = [...s];
        const tArr = [...t];

        let isRunning = true;
        while (isRunning) {

            if(sArr.length === 0) {
                isRunning = false; 
            }

            let firstCharS = sArr[0];
            let firstCharT = tArr[0];
             
            if(firstCharS === firstCharT) {
                sArr.shift();
                tArr.shift();
            } else {
                sArr.shift();
            }
        }


        return tArr.length;
    }
}

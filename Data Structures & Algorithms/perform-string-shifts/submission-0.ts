class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    stringShift(s: string, shift: number[][]): string {
        let sArr = [...s];
        for (let i = 0; i < shift.length; i++) {
            const [direction, amount] = shift[i];
            
            for (let j = 0; j < amount; j++) {
                if (direction === 0) {
                    const val = sArr.shift();
                    sArr.push(val);
                } else {
                    const val = sArr.pop();
                    sArr.unshift(val);
                }
            }
        }

        return sArr.join('');
    }
}
// abc
// abc [0,1]
// bca
// bca [1,2]
// bca > abc > cab

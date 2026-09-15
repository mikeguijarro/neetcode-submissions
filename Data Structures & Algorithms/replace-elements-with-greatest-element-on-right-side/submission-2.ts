class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const replacedArr = [...arr]

        for(let i = 0; i < replacedArr.length; i++) {
            
            if(i === replacedArr.length - 1) {
                continue;
            }

            let greatestElement: null | number = null;

            for(let j = 1 + i; j < replacedArr.length; j++) {
                let nextElement = replacedArr[j];
                if(j === 1 + i) {
                    greatestElement = nextElement;
                    continue;
                }
                

                if(greatestElement < nextElement) {
                    greatestElement = nextElement;
                }
            }

            if(greatestElement === null) {
                continue;
            }

            replacedArr[i] = greatestElement;
        }

        replacedArr[replacedArr.length - 1] = -1
        return replacedArr;
    }
}

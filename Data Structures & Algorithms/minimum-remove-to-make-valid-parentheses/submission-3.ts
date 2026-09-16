class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s: string): string {
        const newStrArr = [...s];
        const stack: number[] = [];
        for (let i = 0; i < newStrArr.length; i++) {
            const char = newStrArr[i];

            if (char === "(") {
                stack.push(i);
            } else if (char === ")") {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    newStrArr[i] = "_";
                }
            }
        }

        while (stack.length !== 0) {
            newStrArr[stack.pop()] = "_";
        }
        const newStr = newStrArr.join('').replaceAll("_", "");
        console.log (newStr)
        return newStr;
    }
}

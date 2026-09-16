class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s: string): string {
        const stack: { index: number; bracket: "(" | ")" }[] = [];
        let newString = [...s];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (char === ")") {
                if (stack.length > 0 && stack[stack.length - 1].bracket === "(") {
                    stack.pop();
                } else {
                    stack.push({ index: i, bracket: ")" });
                }
            } else if (char === "(") {
                stack.push({ index: i, bracket: "(" });
            }
        }
        console.log(stack);
        stack.forEach((item, index) => {
            newString.splice(item.index - index, 1);
        });

        return newString.join("");
    }
}

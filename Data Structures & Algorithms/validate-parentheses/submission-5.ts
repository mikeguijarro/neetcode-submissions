class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) {
            return false;
        }

        const stack1: string[] = [];
        const stack2: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            stack1.push(char);
        }

        while (stack1.length !== 0) {
            if (
                (stack1[stack1.length - 1] === "{" && stack2[stack2.length - 1] === "}") ||
                (stack1[stack1.length - 1] === "(" && stack2[stack2.length - 1] === ")") ||
                (stack1[stack1.length - 1] === "[" && stack2[stack2.length - 1] === "]")
            ) {
                stack1.pop();
                stack2.pop();
            } else {
                stack2.push(stack1.pop());
            }
        }
        if(stack2.length > 0) {
            return false
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack: number[] = [];

        for (let i = 0; i < operations.length; i++) {
            const operation = operations[i];
            const num = Number(operation);
            const isValidNumber = !isNaN(num);
            console.log(stack)
            if (operation === "D") {
                const double = stack[stack.length - 1] * 2
                stack.push(double);
            } else if (operation === "+") {
                const sum = stack[stack.length - 1] + stack[stack.length - 2];
                stack.push(sum);
            } else if(operation === "C") {
                stack.pop()
            } else if (isValidNumber) {
                stack.push(num);
            }
        }
        
        let sum = 0;
        for (let item of stack) {
            sum = item + sum
        }

        return sum
    }
}

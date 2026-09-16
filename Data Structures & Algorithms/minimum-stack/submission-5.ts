class MinStack {
    stack: number[];
    minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        this.minStack.push(val);
        this.minStack.sort((a,b) => b-a);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const poppedVal = this.stack.pop();
        const index = this.minStack.findIndex((val, index) => {
            if (val === poppedVal) {
                return true;
            }
            return false;
        });

        this.minStack.splice(index, 1);
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

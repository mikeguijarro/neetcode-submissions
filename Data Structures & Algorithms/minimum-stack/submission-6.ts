class MinStack {
    stack: { value: number; min: number }[] = []; // Record<number, min>
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push({ value: val, min: val });
        } else {
            this.stack.push({
                value: val,
                min: Math.min(val, this.stack[this.stack.length - 1].min),
            });
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1].value
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length - 1].min
    }
}

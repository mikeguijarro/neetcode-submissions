class MyQueue {
    arr: number[] = [];

    enqueue(val: number): void {
        this.arr.push(val);
    }

    dequeue(): number {
        return this.arr.shift();
    }

    peek(): number {
        return this.arr[0];
    }

    empty(): boolean {
        return this.arr.length === 0;
    }

    length(): number {
        return this.arr.length;
    }
}

class MyStack {
    queue1: MyQueue;
    queue2: MyQueue;

    constructor() {
        this.queue1 = new MyQueue();
        this.queue2 = new MyQueue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue1.enqueue(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        while (this.queue1.length() > 1) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
        const val = this.queue1.dequeue();

        while (this.queue2.length() !== 0) {
            this.queue1.enqueue(this.queue2.dequeue());
        }

        return val;
    }

    /**
     * @return {number}
     */
    top(): number {
        let val: number | null;
        while (this.queue1.length() !== 0) {
            if (this.queue1.length() === 1) {
                val = this.queue1.dequeue();
                continue;
            }
            this.queue2.enqueue(this.queue1.dequeue());
        }
        this.queue2.enqueue(val);

        while (this.queue2.length() !== 0) {
            this.queue1.enqueue(this.queue2.dequeue());
        }

        return val;
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue1.empty();
    }

    private rotateQ1Q2ExceptFor() {}
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

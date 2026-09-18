class LinkedNode {
    val: number;
    next: LinkedNode;

    constructor(val: number, next: LinkedNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class MyQueue {
    head: LinkedNode | null;
    tail: LinkedNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val: number) {
        this.length++;
        const newNode = new LinkedNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    dequeue(): number {
        this.length--;

        const head = this.head;
        const nextNode = this.head.next;

        this.head.next = null;
        this.head = nextNode;
        return head.val;
    }
}

class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const queueStudents = this.buildQueue(students);
        const queueSandwiches = this.buildQueue(sandwiches);

        let counter = 0;
        // Students:  1,0
        // Sandwichs: 0,1
        while (queueStudents.length > counter) {
            const student = queueStudents.head.val;
            const sandwichType = queueSandwiches.head.val;

            if (student === sandwichType) {
                queueStudents.dequeue();
                queueSandwiches.dequeue();
                counter=0;
            } else {
                queueStudents.dequeue();
                queueStudents.enqueue(student);
                counter++;
            }
            
        }

        return queueStudents.length;
    }

    private buildQueue(arr: number[]): MyQueue {
        const queue = new MyQueue();

        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            queue.enqueue(value);
        }
        return queue;
    }
}

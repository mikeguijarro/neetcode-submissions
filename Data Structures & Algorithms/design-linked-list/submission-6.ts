class MyLinkedNode {
    val: number;
    next: MyLinkedNode | null;
    prev: MyLinkedNode | null;

    constructor(val: number, next: MyLinkedNode | null = null, prev: MyLinkedNode | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    head: MyLinkedNode | null;
    tail: MyLinkedNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let i = 0;
        let tmpNode = this.head;
        while (tmpNode !== null) {
            if (i === index) {
                return tmpNode.val;
            }
            i++;
            tmpNode = tmpNode.next;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const newNode = new MyLinkedNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.head.prev = newNode;
        newNode.next = this.head;

        this.head = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const newNode = new MyLinkedNode(val);

        if (this.tail === null) {
            this.tail = newNode;
            this.head = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;

        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (this.head === null && index === 0) {
            this.addAtHead(val);
            return;
        }

        let i = 0;
        let tmpNode = this.head;
        const newNode = new MyLinkedNode(val);

        while (tmpNode !== null) {
            if (i === index - 1 && tmpNode.next === null) {
                this.addAtTail(val);
                return;
            } else if (i === index) {
                const prevNode = tmpNode.prev;

                prevNode.next = newNode;

                newNode.prev = prevNode;
                newNode.next = tmpNode;

                tmpNode.prev = newNode;
                return;
            }
            i++;

            tmpNode = tmpNode.next;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        let tmpNode: MyLinkedNode | null = this.head;
        let i = 0;

        while (tmpNode !== null) {
            if (i === index) {
                if (tmpNode.prev) {
                    tmpNode.prev.next = tmpNode.next;
                } else {
                    this.head = tmpNode.next;
                }
                if (tmpNode.next) {
                    tmpNode.next.prev = tmpNode.prev;
                } else {
                    this.tail = tmpNode.prev;
                }
                return;
            }

            i++;
            tmpNode = tmpNode.next;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

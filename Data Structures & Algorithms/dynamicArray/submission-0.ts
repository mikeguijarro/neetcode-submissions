class DynamicArray {
    arr = [];
    capacity: number;
    size: number;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        for (let i = 0; i < capacity; i++) {
            this.arr.push(null);
        }
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.capacity === this.size) {
            this.resize()
        }
        this.arr[this.size] = n;
        this.size ++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const value = this.arr[this.size - 1];
        this.arr[this.size - 1] = null
        this.size --; 
        return value
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity = this.capacity * 2;
        for(let i = this.size ;i < this.capacity; i++) {
            this.arr[i] = null
        }
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}

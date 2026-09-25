class PhoneDirectory {
    numbers: (number | null)[];

    /**
     * @param {number} maxNumbers
     */
    constructor(maxNumbers: number) {
        this.numbers = Array(maxNumbers).fill(null);
    }

    /**
     * @return {number}
     */
    get(): number {
        for (let i = 0; i < this.numbers.length; i++) {
            const num = this.numbers[i];

            if (num === null) {
                this.numbers[i] = 0;
                return i;
            }
        }
        return -1;
    }

    /**
     * @param {number} number
     * @return {boolean}
     */
    check(number: number): boolean {
        return this.numbers[number] === null;
    }

    /**
     * @param {number} number
     * @return {void}
     */
    release(number: number): void {
        this.numbers[number] = null;
    }
}

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */

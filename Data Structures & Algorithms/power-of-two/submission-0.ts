class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n: number): boolean {

        const result = this.smallestRecursivePower(0, n);

        if(result === n) {
            return true;
        }

        return false;
    }

    smallestRecursivePower(power: number, n: number): number {
        const total = Math.pow(2, power);

        if (total >= n) {
            return total;
        }

        return this.smallestRecursivePower(power + 1, n);
    }

    // n = 1
    // 2^0 = (1) > true

    // n = 8
    // 2^0 = 1
    // 2^1 = 2
    // 2^2 = 4
    // 2^3 = 8 > true
}

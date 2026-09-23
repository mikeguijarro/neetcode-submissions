class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const map: Record<number, number> = {};

        return this.climbStairsRecursively(n, map);
    }

    climbStairsRecursively(n: number, map: Record<number, number>): number {
        if (n <= 1) return 1;
        if (map[n] !== undefined) return map[n];

        map[n] = this.climbStairsRecursively(n - 1, map) + this.climbStairsRecursively(n - 2, map);
        return map[n];
    }
}

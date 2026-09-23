class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const map: Record<number, number>=  {};
        const count = this.climbStairsRecursively(n, map);
        return count;
    }
    

    climbStairsRecursively(n: number, map: Record<number, number>): number {
        if(map[n]) {
            return map[n];
        }

        if (n === 0) {
            map[n] = 1;
            return 1; 
        }

        if (n === 1) {
            const n1 = this.climbStairsRecursively(n-1, map);
            map[n] = n1
            return n1;
        }

        if (n >= 2) {
            const n2 = this.climbStairsRecursively(n - 2, map);
            const n1 = this.climbStairsRecursively(n - 1, map);
            map[n] = n1 + n2;
            return n1 + n2;  
        }


    }
}

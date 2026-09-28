class Solution {
    /**
     * @param {character[][]} picture
     * @return {number}
     */
    findLonelyPixel(picture: string[][]): number {
        const m = picture.length;
        const n = picture[0].length;
        const rows = new Array(m).fill(0);
        const cols = new Array(n).fill(0);

        for (let i = 0; i < picture.length; i++) {
            for (let j = 0; j < picture[i].length; j++) {
                const cell = picture[i][j];

                if (cell === "B") {
                    rows[i]++;
                    cols[j]++;
                }
            }
        }

        let count = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (picture[i][j] === "B" && rows[i] === 1 && cols[j] === 1) {
                    count++;
                }
            }
        }

        return count;
    }
}

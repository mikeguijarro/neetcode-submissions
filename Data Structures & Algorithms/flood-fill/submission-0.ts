class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */

    image: number[][];

    floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
        this.image = image;
        const origin = image[sr][sc];

        if(color === origin) {
            return this.image;
        }

        this.floodFillRec(sr, sc, color, origin);
        return this.image;
    }

    floodFillRec(i: number, j: number, color: number, origin: number) {
        // In boundaries

        this.image[i][j] = color;
        // right
        if (j < this.image[i].length - 1 && this.image[i][j + 1] === origin) {
            this.floodFillRec(i, j + 1, color, origin);
        }
        // left
        if (j > 0 && this.image[i][j - 1] === origin) {
            this.floodFillRec(i, j - 1, color, origin);
        }
        // up
        if (i > 0 && this.image[i - 1][j] === origin) {
            this.floodFillRec(i - 1, j, color, origin);
        }
        // down
        if(i < this.image.length - 1 && this.image[i + 1][j] === origin) {
            this.floodFillRec(i + 1, j, color, origin);
        }

        return;
    }
}

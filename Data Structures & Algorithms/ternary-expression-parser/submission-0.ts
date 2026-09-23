class Solution {
    /**
     * @param {string} expression
     * @return {string}
     */
    parseTernary(expression: string): string {
        const exArr = [...expression];

        const response = this.parseTernaryRecursively(exArr)
        return response[0];
    }

    parseTernaryRecursively(ex: string[]): string[] {
        const char = ex.shift();
        
        if(ex.length === 0) {
            return [char];
        }

        const { leftEx, rightEx } = this.parseTernaryString(ex);
        if (char === "T") {
            return this.parseTernaryRecursively(leftEx);
        } else if(char === "F") {
            return this.parseTernaryRecursively(rightEx);
        }
    }

    parseTernaryString(ex: string[]): { leftEx: string[]; rightEx: string[] } {
        let balancedCounter = 0;
        let index = -1;
        for (let i = 0; i <= ex.length; i++) {
            const char = ex[i];
            if (char === "?") {
                balancedCounter++;
            } else if (char === ":") {
                balancedCounter--;
            }

            if (balancedCounter === 0) {
                index = i;
                break;
            }
        }

        const leftEx = ex.slice(1, index);
        const rightEx = ex.slice(index + 1, undefined);

        return {
            leftEx: leftEx,
            rightEx: rightEx,
        };
    }
}

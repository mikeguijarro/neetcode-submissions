class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // 97 > a
        // 122 > z
        // 65 > A
        // 90 > Z
        // 48 > 0
        // 57 > 9
        console.log("9".charCodeAt(0));
        s = s.toLowerCase();
        // s = s.replaceAll(/[^a-zA-Z0-9]/g, "");
        const sArr = [...s].filter((char) => {
            const charCode = char.charCodeAt(0);
            if (
                (charCode >= 97 && charCode <= 122) || // minus
                (charCode >= 65 && charCode <= 90) || // mayus
                (charCode >= 48 && charCode <= 57) // numbers
            ) {
                return true;
            }
            return false;
        });
    
        const sRevArr = [...sArr].reverse();

        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] !== sRevArr[i]) {
                return false;
            }
        }

        return true;
    }
}

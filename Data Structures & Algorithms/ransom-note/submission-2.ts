class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        const dictMag: Record<string, number> = {};
        
        for(let i =0; i < magazine.length; i++) {
            const char = magazine.charAt(i);
            if(dictMag[char] === undefined) {
                dictMag[char] = 1;
            } else {
                dictMag[char] = dictMag[char] + 1;
            }
        }
        
        const dictRan: Record<string, number> = {};
        for(let i = 0; i < ransomNote.length; i++) {
            const char = ransomNote.charAt(i);
            if(dictRan[char] === undefined) {
                dictRan[char] = 1;
            } else {
                dictRan[char] = dictRan[char] + 1;
            }
        }

        for(let key in dictRan) {
            if(dictMag[key] === undefined) {
                return false;
            }

            if(dictRan[key] > dictMag[key]) {
                return false;
            }
        }

        return true;
    }
}

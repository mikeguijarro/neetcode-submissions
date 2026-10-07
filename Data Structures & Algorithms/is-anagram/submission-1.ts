class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const dict1: Record<string, number> = {}
        const dict2: Record<string, number> = {}

        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            if(dict1[char] === undefined) {
                dict1[char] = 1;
            } else {
                dict1[char] = dict1[char] + 1;
            }
        }

        for(let i = 0; i < t.length; i++) {
            const char = t[i];
            if(dict2[char] === undefined) {
                dict2[char] = 1;
            } else {
                dict2[char] = dict2[char] + 1;
            }
        }

        for(const key in dict1) {
            const val1 = dict1[key];
            const val2 = dict2[key];

            if(val1 !== val2) {
                return false
            }
        }

        for(const key in dict2) {
            const val1 = dict1[key];
            const val2 = dict2[key];

            if(val1 !== val2) {
                return false
            }
        }

        return true;
    }
}

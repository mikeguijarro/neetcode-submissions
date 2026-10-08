class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr = "";

        if(strs.length === 0) {
            return 'empty'
        }

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            if (str === "") {
                encodedStr = encodedStr.concat("_");
            } else {
                for (let j = 0; j < str.length; j++) {
                    const char = str.charCodeAt(j);
                    encodedStr = encodedStr.concat(String(char));
                    if (j < str.length - 1) {
                        encodedStr = encodedStr.concat(",");
                    }
                }
            }
            if (i < strs.length - 1) {
                encodedStr = encodedStr.concat("|");
            }
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str === 'empty') {
            return [];
        }
        let strArr = str.split("|");
        for (let i = 0; i < strArr.length; i++) {
            const str = strArr[i];
            if (str === "_") {
                strArr[i] = "";
            } else {
                const chars = str.split(",");
                let word = "";
                for (let j = 0; j < chars.length; j++) {
                    const char = String.fromCharCode(Number(chars[j]));
                    word = word.concat(char);
                }
                strArr[i] = word;
            }
        }

        return strArr;
    }
}

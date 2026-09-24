class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseWords(s: string[]): void {
        let stack: string[][] = [];

        let lastIndex = 0;

        for(let i = 0; i < s.length; i++) {
            if(s[i] === ' ') {
                const word: string[] = s.slice(lastIndex, i);
                stack.push(word);
                stack.push([' ']);
                lastIndex = i + 1;
            }

            if(i === s.length - 1) {
                const word: string[] = s.slice(lastIndex, undefined);
                stack.push(word);
            }
        }

        console.log(stack)

        s.splice(0);

        while(stack.length !== 0) {
            const pop = stack.pop()
            console.log(pop)
            s.push(...pop);
        }
    }
}

class BrowserNode {
    val: string;
    next: BrowserNode | null;
    prev: BrowserNode | null;

    constructor(val: string, next: BrowserNode | null = null, prev: BrowserNode | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    current: BrowserNode;

    constructor(homepage: string) {
        const newBrowserNode = new BrowserNode(homepage);

        this.current = newBrowserNode;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url): void {
        const newBrowserNode = new BrowserNode(url);

        this.current.next = newBrowserNode;
        newBrowserNode.prev = this.current;

        this.current = newBrowserNode;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps): string {
        let counter = 0;
        while (this.current.prev !== null) {
            if (counter === steps) {
                break;
            }
            this.current = this.current.prev;
            counter++;
        }

        return this.current.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let counter = 0;
        while (this.current.next !== null) {
            if (counter === steps) {
                break;
            }
            this.current = this.current.next;
            counter++;
        }

        return this.current.val;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertAt(item, index) {
        let currNode = this.head;
        
        for(let i=1; i<=index; i++) {
            currNode = currNode.next
        }
        currNode.value = item
    }

    insertBefore(newItem, beforeItem) {
        let currNode = this.head;
        let previousNode = currNode;

        if(!this.head) {
            return null;
        }

        while (currNode.value !== beforeItem) {
            previousNode = currNode;
            currNode = currNode.next;

            if (currNode === null) {
                return console.log('item not found')
            }
        }
        previousNode.next = new _Node(newItem, currNode.next)
    }
    
    insertAfter(newItem, afterItem) {
        let currNode = this.head;

        if(!this.head) {
            return null;
        }

        while (currNode.value !== afterItem) {
            currNode = currNode.next;

            if (currNode === null) {
                return console.log('item not found')
            }
        }
        const nextNode = currNode.next
        currNode.next = new _Node(newItem, nextNode)
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function main() {
    const SLL = new LinkedList;

    const initalItems = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];

    initalItems.forEach(item => {
        SLL.insertFirst(item)
    });

    SLL.insertFirst('Tauhida');

    SLL.remove('squirrel');

    SLL.insertBefore('Steve', 'Tauhida')

    SLL.insertAfter('Bob', 'Steve');

    SLL.insertFirst('First');

    SLL.insertAt('Newfirst', 0);

    display(SLL);

    console.log(size(SLL));

    reverseList(SLL);

    display(SLL);
}

function display(listClass) {
    let currNode = listClass.head;
    while (currNode !== null) {
        console.log(listClass.find(currNode.value))
        currNode = currNode.next
    }
}

function size(listClass) {
    let currNode = listClass.head;
    let size = 0;
    while (currNode !== null) {
        size++;
        currNode = currNode.next;
    }
    return size;
}

function reverseList(listClass) {
    let startNode = listClass.head;
    let currNode;
    let nextNode = startNode.next
    startNode.next = null;
    let previousNode = startNode;
    while (nextNode !== null) {
        currNode = Object.assign({}, nextNode);
        nextNode.next = previousNode;
        previousNode = nextNode;
        nextNode = currNode.next;
    }
    listClass.head = previousNode;
}


main();
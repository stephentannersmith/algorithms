class Node {
    constructor(value) {
        // node has head and value
        this.value = value;
        this.next = null;
    }
}

class SLL {

    constructor() {
        this.head = null;
    }

    addToFront(value) {
        // make a node
        var newNode = new Node(value);
        // assign the new node to the head attribute
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(value) {
        var newNode = new Node(value);
        var current = this.head;
        current = current.next
        while(current.next) {
            // move current to the last node
            current = current.next;
        }
        current.next = newNode;
    }

    removeFront() {
        if (this.head) {
            this.head = this.head.next;
        }
        else {
            return null;
        }
    }

    Front() {
        if(this.head) {
            return this.head.value
        }
    }

    displayValue() {
        // assign "iterator" to head
        var current = this.head;
        // if the head = null, return an empty display
        if (current === null) {
            console.log("[]")
            return;
        }
        // create start bracket
        var output = "[";
        // while current has a value, add current.value to "list" thing
        while(current) {
            output += current.value;
            // if current has a next, add a comma 
            if(current.next) {
                output += ", ";
            }
            // set current to equal the value of current.next then start over
            current = current.next;
        }
    }

    length() {
        var current = this.head;
        var count = 0;
        if (current === null) {
            return null;
        }
        while (current) {
            count++
            current = current.next
        }
        return count;
    }

    contains() {
        var current = this.head;
        while(current) {
            if (current == current.value) {
                return true
            }
            current = current.next
        }
        return this
    }

    max() {
        var current = this.head;
        var max = this.head.value;
        while (current) {
            if (current.value > max) {
                max = current.value
            }
            current = current.next
        } 
    }

    min() {
        var current = this.head;
        var min = this.head.value;
        while (current) {
            if (current.value < min) {
                min = current.value
            }
            current = current.next
        } 
    }

    avg() {
        var current = this.head;
        var sum = 0;
        while (current) {
            sum += current.value;
            current = current.next
        }
        return sum/this.length();
    }
}

var myList = new SLL();
myList.addToFront(25);
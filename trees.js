class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }

// BST: Add Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

    add(value) {
        if(this.root) {
            var runner = this.root;
            while(runner) {
                if (value > runner.value) {
                    if (runner.right) {
                        runner = runner.right;
                    } 
                    else {
                        runner.right = new Node(value);
                        return this
                    }
                } else {
                    if(runner.left){
                        runner = runner.left;
                    } else {
                        runner.left = new Node(value);
                        return this
                    }
                }
            }
        }
        this.root = new Node(value);
        return this
    }

    // BST: Contains
    // Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.   

    contains(value) {
        var runner = this.root;
        while (runner) {
            if (value == runner.value) {
                return true;
            }
            if (value < runner.value) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            } else {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }

    // BST: Min Create a min() method on the BST class that returns the smallest value found in the BST.
    min() {
        var runner = this.root;
        var min = this.root.value;
        while(runner.left) {
            if(runner.left.value < min) {
                min = runner.left.value;
            }
            runner = runner.left;
        }
        return min
    }
    max() {
        var runner = this.root;
        var max = this.root.value;
        while(runner.right) {
            if(runner.right.value > max) {
                max = runner.right.value;
            }
            runner = runner.right;
        }
        return max
    }

    isEmpty() {
        if(this.root) {
            return false
        }
        return true
    }
}

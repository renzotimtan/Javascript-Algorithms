class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        // create a node
        let newNode = new Node(value)

        // If there is no root
        if (this.root === null) {
            this.root = newNode
            return this;
        } 

        // if there is already a root
        let current = this.root

        while (true) {
            if (value === current.value) return undefined;

            if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode
                    return this 
                } 
                current = current.right
            } else if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                } 
                current = current.left
            }
        }
    }
    contains(num) {
        if (!this.root) return false
        if (this.root.value === num) return true

        let currentNode = this.root
        while(true) {
            if (num < currentNode.value) {
                if (currentNode.left === null) return false
                currentNode = currentNode.left
            } else if (num > currentNode.value) {
                if (currentNode.right == null) return false
                currentNode = currentNode.right
            }  else {
                //this means the values are equal
                return true
            }
        }
    }

    // -----------------------------------
    // TRAVERSING A TREE
    // -----------------------------------

    
    // Breadth first search - takes more space if wide tree
    BFS() {
        let queue = []
        let finished = []
        let currentNode = this.root
 
        if (currentNode !== null) queue.push(currentNode)
        while (queue.length) {
            
            currentNode = queue.shift()
            finished.push(currentNode.value)

            if (currentNode.left !== null) queue.push(currentNode.left)
            if (currentNode.right !== null) queue.push(currentNode.right)
        }

        return finished
    }

    // Depth First Search - takes more space if thin long tree

    // PreOrder - useful for cloning a tree
    DFSPreOrder() {
        let data = []
        traverse(this.root)

        function traverse(node) {
            // first
            data.push(node.value)
            if (node.left !== null) traverse(node.left)
            if (node.right !== null) traverse(node.right)
        }
        return data
    }

    // PostOrder
    DFSPostOrder() {
        let data = []
        traverse(this.root)

        function traverse(node) {
            if (node.left !== null) traverse(node.left)
            if (node.right !== null) traverse(node.right)
            // last
            data.push(node.value)
        }
        return data
    }

    // InOrder - works well in getting the order of a binary search tree
    DFSInOrder() {
        let data = []
        traverse(this.root)

        function traverse(node) {
            if (node.left !== null) traverse(node.left)
            // middle
            data.push(node.value)
            if (node.right !== null) traverse(node.right)
        }
        return data
    }
}

var tree = new BST();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())




    // RECURSION METHOD FOR INSERT
    // insert(value, current = this.root) {
    //     let newNode = new Node(value);

    //     if(this.root == null) {
    //         this.root = newNode;
    //         return this
    //     }
 
    //     if(value < current.value) {
    //         if(current.left == null) {
    //             current.left = newNode;
    //             return this
    //         } 
    //         this.insert(value, current.left);
    //     } else {
    //         if(current.right == null) {
    //             current.right = newNode;
    //             return this
    //         }
    //         this.insert(value, current.right);
    //     }
    // }
  
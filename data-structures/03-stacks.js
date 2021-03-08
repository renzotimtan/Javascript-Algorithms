
// -------------------------------------------------------------
// ARRAY METHOD - slower because it comes with indexes and methods that 
// are not necessary

// let stack = []

// // add to the stack
// stack.push("google")
// stack.push("instagram")
// stack.push("youtube")

// // remove from the end
// stack.pop() 
// stack.pop() 
// stack.pop() 

// you can also use shift and unshift but its inefficient since the 
// indeces need to reindex O(n)

// -------------------------------------------------------------
// SINGLY LINKED LIST

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode
            this.last = this.first
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
     }

     pop() {
        if (this.size === 0) return null
        if (this.size === 1) this.last = null
        
        let removed = this.first
        this.first = this.first.next
        this.size--
        
        return removed
     }
}


let stack = new Stack()
stack.push("FIRST")
stack.push("SECOND")



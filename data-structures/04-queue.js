// ARRAY

let q = []

q.push(1)
q.push(2)
q.push(3)

q.shift()

// Linked List

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.start = null
        this.end = null
        this.size = 0
    }
    enqueue(val) {
        let newNode = new Node(val)
        if(this.size === 0) {
            this.start = newNode
            this.end = this.start
        } else {
            this.end.next = newNode
            this.end = newNode
        }
        return ++this.size
    }
    dequeue() {
        if (this.size === 0) return null

        let temp = this.start
        if (this.size === 1) this.end = null

        this.start = this.start.next
        this.size--

        return temp.value

    }
}
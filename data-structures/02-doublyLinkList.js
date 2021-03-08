class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doublyLinkList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let remove = this.tail
        if(this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.tail = remove.prev
            this.tail.next = null
        }
        
        this.length--
        return remove
    }
    shift() {
        if (!this.head) return undefined
        let remove = this.head
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = remove.next
            this.head.prev = null
            remove.next = null
        }
        this.length--
        return remove
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let currentNode, count;
        if (index <= this.length/2) {
            currentNode = this.head
            count = 0
            while(count != index) {
                currentNode = currentNode.next
                count++
            }
        } else {
            currentNode = this.tail
            count = this.length - 1
            while(count != index) {
                currentNode = currentNode.prev
                count--
            }
        }
        return currentNode
    }
    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return false
        if (index == 0) {
            this.unshift(val)
        } else if (index == this.length - 1) {
            this.push(val)
        } else {
            let newNode = new Node(val)
            let prevNode = this.get(index - 1)

            newNode.prev = prevNode
            newNode.next = prevNode.next
            prevNode.next.prev = newNode
            prevNode.next = newNode
        
        }
        this.length++
        return true
    }
    remove(index, val) {
        if (index < 0 || index >= this.length) return undefined

        if (index === 0) return this.shift(val)
        if (index === this.length - 1) return this.pop(val) 

        let removeNode = this.get(index)
        let prevNode = removeNode.prev
        let afterNode = removeNode.next
            
        prevNode.next = afterNode
        afterNode.prev = prevNode

        removeNode.prev = null
        removeNode.next = null

        this.length--
        return removeNode
    }
}

let list = new doublyLinkList()
list.push(40)
list.push(41)
list.push(42)
list.push(43)
list.push(44)
list.push(45)
list.push(46)
list.remove(1)
console.log(list.get(1))


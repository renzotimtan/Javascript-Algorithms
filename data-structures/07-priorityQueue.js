class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(value, priority) {
        // Create Node
        let newNode = new Node(value, priority)
        // Push the value
        this.values.push(newNode)

        // Get the last index and element
        let index = this.values.length - 1
        let element = this.values[index]
        let elementPriority = element.priority

        // Bubble up
        while (index > 0) { // 0 is already the largest (root element)
            // Get the parent index and element
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            let parentPriority = parent.priority

            // If element is greater, swap
            if (elementPriority < parentPriority) {
                this.values[parentIndex] = element
                this.values[index] = parent
                // make index the parent index
                index = parentIndex
            } else break
        }
    }

    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()

        // only do the swap if there is an element after the pop
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }

        return max
    }

    sinkDown() {
        let currIdx = 0;
        const element = this.values[0];
        const elementPriority = element.priority
        let length = this.values.length
 
        while(true) {
            let child1Idx = currIdx * 2 + 1
            let child2Idx = currIdx * 2 + 2

            let child1Priority = Infinity
            let child2Priority = Infinity
            
            if (child1Idx < length) {
                child1Priority = this.values[child1Idx].priority 
            }
            if (child2Idx < length) {
                child2Priority = this.values[child2Idx].priority 
            }
            if (child1Priority === Infinity && child2Priority === Infinity) break
            
            let tempIdx = child1Priority < child2Priority ? child1Idx : child2Idx
            if (this.values[tempIdx].priority < elementPriority) {
                [this.values[tempIdx], this.values[currIdx]] = [element, this.values[tempIdx]]
                currIdx = tempIdx
            } else break;
        }
    }
}

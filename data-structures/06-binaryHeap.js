class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }
    insert(value) {
        // Push the value
        this.values.push(value)

        // Get the last index and element
        let index = this.values.length - 1
        let element = this.values[index]

        // Bubble up
        while (index > 0) { // 0 is already the largest (root element)
            // Get the parent index and element
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]

            // If element is greater, swap
            if (element > parent) {
                this.values[parentIndex] = element
                this.values[index] = parent 
                // make index the parent index
                index = parentIndex
            } else break
        }
    }

    extractMax() {
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
 
        while(true) {
            let child1Idx = currIdx * 2 + 1
            let child2Idx = currIdx * 2 + 2
            let child1 = this.values[child1Idx] || -Infinity
            let child2 = this.values[child2Idx] || -Infinity
            
            let tempIdx = child1 > child2 ? child1Idx : child2Idx

            if (this.values[tempIdx] > element) {
                [this.values[tempIdx], this.values[currIdx]] = [element, this.values[tempIdx]]
                currIdx = tempIdx
            } else break;
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)

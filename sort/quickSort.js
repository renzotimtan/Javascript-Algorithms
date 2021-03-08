function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right) // 3
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr
}

console.log(quickSort([4,6,9,1,2,5,3]))

function pivot(arr, start, end) {
    
    let pivot = arr[start]
    let swapIdx = start

    for (let i = start + 1; i <= end; i++) {

        // If that number is less than the pivot number
        if (pivot > arr[i]) {

            // Add swapIdx
            swapIdx++

            // Swap swapidx and i 
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
        }
    }

    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]

    return swapIdx
}



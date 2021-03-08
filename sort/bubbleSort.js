// Time complexity: O(n^2)
// Best case with noSwaps O(n)

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length - 1; i > 0; i--) {
        noSwaps = true;
        for (let j = 0;  j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    return arr
}



console.log(bubbleSort([37,45,29,8]))
function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


function merge(arr1, arr2) {
    let i = 0
    let j = 0
    let ansArr = []

    // loop until one of the arrays are empty
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            ansArr.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            ansArr.push(arr2[j])
            j++
        }
    }

    // push remaining elements of non-empty array
    while (i < arr1.length) {
        ansArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        ansArr.push(arr2[j])
        j++
    }

    return ansArr
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))




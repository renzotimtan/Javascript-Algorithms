function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)

    for (let k = 0; k < maxDigitCount; k++) {

        let digitBuckets = Array.from({length: 10}, () => [])

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }

        nums = [].concat(...digitBuckets)

    }
    
    return nums
}

console.log(radixSort([23, 345, 5467, 2, 2345, 9852]))

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
 }

 function digitCount(num) {
     return String(num).length
 }

 function mostDigits(arr) {
     let max = 0
     for (let i = 1; i < arr.length; i++) {
         max = Math.max(max, digitCount(arr[i]))
     }
     return max
 }


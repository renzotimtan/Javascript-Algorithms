// Time Complexity O(logn)
function binarySearch(arr, val){
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === val) {
          return mid;
      } else if (arr[mid] < val) {
          start = mid + 1;
      } else if (arr[mid] > val) {
          end = mid - 1;
      }
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5], 5))
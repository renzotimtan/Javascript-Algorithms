function averagePair(arr, avg){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return false;
  let start = 0;
  let end = arr.length - 1;
  
  while (start < end) {
      let tempAvg = (arr[start] + arr[end]) / 2;
      if (tempAvg === avg) {
          return true;
      } else if (tempAvg < avg) {
          start++;
      } else {
          end--;
      }
  }
  return false;
}

function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  
  let i = 0;
  let j = 1;
  while (j < arr.length) {
      if (arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
      }
      j++;
  }
  return i + 1;
}
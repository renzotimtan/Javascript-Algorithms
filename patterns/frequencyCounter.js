function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
      if (obj[arguments[i]] === 1) {
          return true;
      } else {
        obj[arguments[i]] = (obj[arguments] || 0) + 1;
      }
  }
  return false;
}
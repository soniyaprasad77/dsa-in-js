// arr = [2, 9, 1, 6, 8, 1 , 9];
// currentIndex = 0;
// findMe = 1;
// result ==> 2
// if not found return -1;

// iterative approach

function firstOccurance(arr, currentIndex, findMe) {
  while (currentIndex < arr.length) {
    if (arr[currentIndex] === findMe) {
      return currentIndex;
    }
    currentIndex++;
  }
  return -1;
}
console.log(firstOccurance([2, 9, 1, 6, 8, 1, 9], 0, 9));

//recursive approach

function firstOccuranceRecursive(arr, currentIndex, findMe) {
  if (arr.length === currentIndex) {
    return -1;
  }
  if (arr[currentIndex] === findMe) {
    return currentIndex;
  }
  return firstOccuranceRecursive(arr, currentIndex + 1, findMe);
}
console.log(firstOccuranceRecursive([2, 9, 1, 6, 8, 1, 9], 0, 1));

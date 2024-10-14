// remove all the adjacent duplicates from a string

// iterative approach

function removeAdjacent(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1 || str[i] != str[i + 1]) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeAdjacent("heellooo"));

// recursive approach
function removeAdjacentRecursive(str) {
  if (str.length <= 1) {
    return str;
  }
  if (str[0] === str[1]) {
    return removeAdjacentRecursive(str.substring(1));
  }
  return str[0] + removeAdjacentRecursive(str.substring(1));
}
console.log(removeAdjacentRecursive("hellloooo"));

/*
Output: 
helo
helo

*/

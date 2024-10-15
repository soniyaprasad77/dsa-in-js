// balanced paranthethesis problem
// Input = ["(" , "(", ")", ")", "(", ")"]

function balancedParanthesis(arr, startIndex = 0, currIndex = 0) {
  if (startIndex == arr.length) {
    return currIndex == 0;
  }
  if (currIndex < 0) {
    return false;
  }
  if (arr[startIndex] == "(") {
    return balancedParanthesis(arr, startIndex + 1, currIndex + 1);
  } else if (arr[startIndex] == ")") {
    return balancedParanthesis(arr, startIndex + 1, currIndex - 1);
  } else {
    return false;
  }
}
console.log(balancedParanthesis(["(", ")"]))

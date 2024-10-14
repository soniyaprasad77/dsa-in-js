// implement length without length

// recursive

function recursiveLength(str) {
  if ((str = "")) {
    return 0;
  }
  return 1 + recursiveLength(str.subString(1));
}

console.log(recursiveLength("Soniya"));

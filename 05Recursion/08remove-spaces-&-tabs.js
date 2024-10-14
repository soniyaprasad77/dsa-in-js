// Our task is to remove all the spaces and tabs from a given string
// i.e to remove " " and "\t"

// iterative approach

function removeTaS(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "\t") {
      result += str[i];
    }
  }
  return result;
}
console.log(removeTaS("Hell l \to"));

// recursive approach

function removeTaSRecursive(str) {
  if (str.length === 0) {
    return "";
  }
  if (str[str.length - 1] == " " || str[str.length - 1] == "\t") {
    return removeTaSRecursive(str.substring(0, str.length - 1));
  }
  return (
    removeTaSRecursive(str.substring(0, str.length - 1)) + str[str.length - 1]
  );
}

console.log(removeTaSRecursive("Hello t "));
console.log(removeTaSRecursive("Hell l \to"));

// or

function removeTaSRecursive2(str) {
  if (str.length === 0) {
    return "";
  }
  const firstIndex = str[0];
  const restOfString = str.slice(1);
  if (firstIndex === " " || firstIndex === "\t") {
    return removeTaSRecursive2(restOfString);
  } else {
    return firstIndex + removeTaSRecursive2(restOfString);
  }
}

console.log(removeTaSRecursive2("Hello t "));
console.log(removeTaSRecursive2("Hell l \to"));

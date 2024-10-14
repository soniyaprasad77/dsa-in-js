// iterative approach

const reverseStringIterative = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
// recursive
const reverseStringRecursive = (str) => {
  if (str === "") {
    return str;
  }
  return (
    reverseStringRecursive(str.substring(0, str.length - 1))
  );
};

console.log(reverseStringIterative("hello"));
console.log(reverseStringRecursive("hello"));

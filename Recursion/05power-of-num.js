// power of a base
// iterative approach
function powerOfNumIterative(base, power) {
  let result = 1;
  for (i = 0; i < power; i++) {
    if (power === 0) {
      result = 1;
    }
    result *= base;
  }
  return result;
}
console.log(powerOfNumIterative(2, 3));

// recursive
function powerOfNumRecursive(base, power) {
  if (power == 0) {
    return 1;
  }
  return base * powerOfNumRecursive(base, power - 1);
}
console.log(powerOfNumRecursive(2, 3));

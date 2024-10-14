// find gcd of two numbers

// iterative approach

function gcdIterative(num1, num2) {
  let divisorsForNum1 = [];
  let divisorsForNum2 = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      divisorsForNum1.push(i);
    }
  }
  for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) {
      divisorsForNum2.push(i);
    }
  }
  // Find the common divisors
  let commonDivisors = divisorsForNum1.filter((value) =>
    divisorsForNum2.includes(value)
  );
  console.log(commonDivisors);
  // Return the largest common divisor (GCD)
  return Math.max(...commonDivisors);
}
console.log(gcdIterative(24, 36));

// recursive approach

function gcdRecursive(num1, num2) {
  if (num1 === num2) {
    return num1;
  }
  if (num1 < num2) {
    return gcdRecursive(num1, num2 - num1);
  } else {
    return gcdRecursive(num1 - num2, num2);
  }
}
console.log(gcdRecursive(24, 36))
// find nth Tribonacci value using Memoization approach of dynamic programming

const TribonacciMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  memo[n] =
    TribonacciMemo(n - 1, memo) +
    TribonacciMemo(n - 2, memo) +
    TribonacciMemo(n - 3, memo);
  return memo[n];
};
console.log(TribonacciMemo(34));

// find nth Tribonacci value using Tabulation approach of dynamic programming
const TribonacciTab = (n) => {
  const table = [0, 1, 1];
  if (n < 3) {
    return table[n];
  }
  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2] + table[i - 3];
  }
  return table[n];
};

console.log(TribonacciTab(34));

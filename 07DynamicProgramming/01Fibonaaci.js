// finding nth fibonaaci using memoization of dynamic programming

function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}
console.log(fibMemo(4));

// finding nth fibonaaci using tabulation of dynamic programming

function fibTab(n) {
  if (n <= 1) return n;
  //const table = [0, 1]; or
  const table = Array(n + 1).fill(0);

  table[1] = 1;
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}
console.log(fibTab(4));

// minimum coins sum required to get the number
function minCoin(coins, number, memo = {}) {
  if (number in memo) {
    return memo[number];
  }
  if (number === 0) {
    return 0;
  }
  if (number < 0) {
    return -1;
  }
  let minCoinsCount = Infinity;
  for (const coin of coins) {
    const result = minCoin(coins, number - coin, memo);
    if (result != -1) {
      minCoinsCount = Math.min(minCoinsCount, result + 1);
    }
  }
  memo[number] = minCoinsCount === Infinity ? -1 : minCoinsCount;
  return memo[number];
}
console.log(minCoin([5, 12, 4], 8));

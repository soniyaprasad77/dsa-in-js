// min path sum

function minPathSum(grid, row = 0, col = 0) {
  let pos = row + " " + col;
  let memo = {};
  if (row >= grid.length || col >= grid[0].length) {
    return Infinity;
  }
  // check if arrived at given location
  if (grid[row][col] === grid[grid.length - 1][grid[0].length - 1]) {
    return grid[row][col];
  }
  if (pos in memo) {
    return memo[pos];
  }

  memo[pos] =
    grid[row][col] +
    Math.max(minPathSum(grid, row + 1, col), minPathSum(grid, row, col + 1));

    return memo[pos];
}
grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum(grid));

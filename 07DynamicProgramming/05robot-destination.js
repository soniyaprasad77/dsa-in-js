// letcode unique path 1

function countPaths(grid, row = 0, col = 0, memo = {}) {
    const pos = row + " " + col;
    if (row >= grid.length || col >= grid[0].length || grid[row][col] === "X") {
        return 0;
    }
    // check if you have arrived at given location
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return 1;
    }
    // return the cache/memoised result
    if (pos in memo) {
        return memo[pos];
    }
    memo[pos] =
        countPaths(grid, row + 1, col, memo) + countPaths(grid, row, col + 1, memo);
    return memo[pos];
}

const matrix = [
    [0, 0, 0],
    [0, "X", 0],
    [0, 0, 0]
];

console.log(countPaths(matrix));

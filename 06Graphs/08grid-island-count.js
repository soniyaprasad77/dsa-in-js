// grid island problem

function gridIsland(grid) {
  const row = grid.length;
  const col = grid[0].length;
  let visited = new Set();
  let count = 0;
  function dfs(r, c) {
    const pos = r + "," + c;
    if (
      r < 0 ||
      r >= row ||
      c < 0 ||
      c >= col ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return;
    }
    visited.add(pos);
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}

const matrix = [
  ["W", "L", "W", "L"],
  ["L", "L", "L", "W"],
  ["W", "L", "W", "L"],
];

console.log(gridIsland(matrix));

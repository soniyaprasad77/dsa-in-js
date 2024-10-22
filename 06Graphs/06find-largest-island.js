// find largest island

function biggestIsland(graph) {
  let sizeOfBiggestIsland = 0;
  let visited = new Set();

  function dfs(node) {
    if (visited.has(node)) {
      return 0;
    }
    visited.add(node);
    let count = 1;
    if (!graph[node]) return 0;
    for (const neighbour of graph[node]) {
      count += dfs(neighbour);
    }
    return count;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      const componentSize = dfs(node);
      if (componentSize > sizeOfBiggestIsland) {
        sizeOfBiggestIsland = componentSize;
      }
    }
  }
  return sizeOfBiggestIsland;
}

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};
console.log(biggestIsland(graph));

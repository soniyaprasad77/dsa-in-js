// connected count

function countConnectedIsland(graph) {
  let count = 0;
  let visited = new Set();

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        dfs(neighbour);
      }
    }
  }
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
}
const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};
console.log(countConnectedIsland(graph));

// Depth first search - iterative approach
function DFSIterative(graph, start) {
  const stack = [start];
  const visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
  return visited;
}

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

console.log(DFSIterative(graph, "a"));

// recursion

function DFSRecursive(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    for (let neighbour of graph[start]) {
      DFSRecursive(graph, neighbour, visited);
    }
  }
  return visited;
}
console.log(DFSRecursive(graph, "a"));

/**
 * Output
 * $ node 01DFS.js
 * Set(4) { 'a', 'c', 'd', 'b' }
 * Set(4) { 'a', 'd', 'c', 'b' }
 */

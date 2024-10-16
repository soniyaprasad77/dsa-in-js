// Breadth First Search - Iterative Approach
function BFSIterative(graph, start) {
  const queue = [start];
  const visited = new Set([start]); // Mark the start node as visited initially
  while (queue.length > 0) {
    const node = queue.shift();
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return visited;
}

// Breadth First Search - Recursive Approach
function BFSRecursive(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start); // Ensure the start node is added to visited set
    for (let neighbour of graph[start]) {
      if (!visited.has(neighbour)) {
        BFSRecursive(graph, neighbour, visited);
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

console.log(BFSIterative(graph, "a")); // Expected: Set(4) { 'a', 'b', 'c', 'd' }
console.log(BFSRecursive(graph, "a")); // Expected: Set(4) { 'a', 'b', 'c', 'd' }

/**
 * Output:
 * $ node 02BFS.js 
 * Set(4) { 'a', 'b', 'c', 'd' }
 * Set(4) { 'a', 'b', 'c', 'd' }
 */
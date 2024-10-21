

function hasPathDFS(graph, start, dest) {
  let stack = [start];
  let visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (node === dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }
  return false;
}
const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

console.log(hasPathDFS(graph, "a", "c"));
console.log(hasPathDFS(graph, "a", "d"));

/**
 * $ node 03directed-path.js
 * true
 * true
 */

function hasPathDFSRecursive(graph, start, dest, visited = new Set()) {
  if (start === dest) {
    return true;
  }
  if (!visited.has(start)) {
    visited.add(start);
    for (const neighbour of graph[start]) {
      if (hasPathDFSRecursive(graph, neighbour, dest, visited)) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasPathDFSRecursive(graph, "a", "c"));
console.log(hasPathDFSRecursive(graph, "a", "f"));

function hasPathBFS(graph, start, dest) {
  let queue = [start];
  let visited = new Set();
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === dest) {
      return true;
    }
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return false;
}

console.log(hasPathBFS(graph, "a", "d"));
console.log(hasPathBFS(graph, "a", "f"));

/**
 * 
 * @param {*} edges 
 * @returns 
 * 
 * Write a function, undirectedPath, that takes in an array of 
 * edges for an undirected graph and two nodes.
 * 
 * After that you can find and node path etc.
 * Take care of cycle via visited technique
 * 
 */
// convert to directed graph ||  loop  == >> if key does not exit, then add key ==> push both nodes
function convertToDirected(edges) {
  let graph = {};
  for (const e of edges) {
    const [a, b] = e;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function undirectedPath(edges, start, dest, visited = new Set()) {
  const graph = convertToDirected(edges);
  if (start === dest) {
    return true;
  }
  if (visited.has(start)) {
    return false;
  }
  visited.add(start);
  for (const neighbour of graph[start]) {
    if (undirectedPath(edges, neighbour, dest, visited)) {
      return true;
    }
  }
  return false;
}

const edges = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
];

console.log(convertToDirected(edges));
console.log(undirectedPath(edges, "a", "f"));
console.log(undirectedPath(edges, "a", "e"));


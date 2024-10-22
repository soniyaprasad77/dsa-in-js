// find shortest path between two given edges of a graph

function convertTo(edges) {
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

function findShortestPath(edges, start, end) {
  const graph = convertTo(edges);
  let queue = [[start, 0]];
  let visited = new Set([start]);
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === end) return distance;
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  return -1; // return -1 if there is no path from start to end
}

const edges = [
  ["a", "c"],
  ["b", "c"],
  ["c", "d"],
  ["c", "e"],
  ["e", "f"],
];

console.log(findShortestPath(edges, "a", "c")); // Output should be 1

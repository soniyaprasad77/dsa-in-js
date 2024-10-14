class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const breathFirstTraversal = (root) => {
  if (root === null) {
    return [];
  }
  let values = [];
  let queue = [root];
  while (queue.length > 0) {
    const node = queue.shift(); // point of optimization
    values.push(node.key); // Add the node key to the values array
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return values;
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(breathFirstTraversal(root));

/* 
$ node BinarySearchTree/bfs.js
[
  1, 2, 3, 4,
  5, 6, 7
]

*/

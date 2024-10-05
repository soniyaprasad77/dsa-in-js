class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// Depth first Traversal

const depthFirstTraversal = (root) => {
  if (root === null) {
    return;
  }

  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    // left-wise traversal
    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return values;
};

const recursiveDepthFirstTraversal = (root) => {
  if (root === null) {
    return [];
  }
  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValues = recursiveDepthFirstTraversal(root.right);
  return [root.key, ...leftValues, ...rightValues];
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

console.log(depthFirstTraversal(root));
console.log(recursiveDepthFirstTraversal(root));


 /* 
 
 node BinarySearchTree/dft.js 
[ 1, 2, 4, 5, 3, 6 ]
[ 1, 2, 4, 5, 3, 6 ]

*/
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const treeSumWithBreathFirstSearch = (root) => {
  if (root === null) return;
  let queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return sum;
};

const treeSumWithRecursion = (root) => {
  if (root === null) return 0;

  return (
    root.key +
    treeSumWithRecursion(root.left) +
    treeSumWithRecursion(root.right)
  );
};
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(treeSumWithBreathFirstSearch(root));
console.log(treeSumWithRecursion(root));

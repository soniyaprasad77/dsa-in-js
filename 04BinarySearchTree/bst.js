class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //insertion in binarysearchtree
  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(rootNode, newNode) {
    if (rootNode.key > newNode.key) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  //deletion in binary search tree

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }
  deleteNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.right === null && node.left === null) {
        return null;
      } else if (node.right === null) {
        return node.left;
      } else if (node.left === null) {
        return node.right;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }
  findMinNode(node) {
    if (node === null) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // pre post and in order traversal in binary search tree

  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }
  inOrder() {
    if (node != null) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
  }
  // pre order
  preOrderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    return result;
  }
  preOrder() {
    if (node != null) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }
  // post order
  postOrderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    return result;
  }
  postOrder() {
    if (node != null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.key);
    }
  }
}

const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(6);
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(2);
myBinarySearchTree.insert(0);
myBinarySearchTree.insert(8);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(2);

console.log(myBinarySearchTree);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeggining = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  let last = this.head;
  while (last.head === null) {
    last = last.next;
  }
  last.next = newNode;
};

LinkedList.prototype.insertAtGivenNode = function (prevNode, data) {
  if (!prevNode) {
    console.log("The given prev node cannot be null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// Deletion of nodes 




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
// print linkedList
LinkedList.prototype.printLinkedList = function () {
  let list = [];
  if (!this.head) return;
  let current = this.head;
  while (current) {
    list += current.data + " ";
    current = current.next;
  }
  return list;
};

// Deletion of nodes

//Delete first node
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) return;
  this.head = this.head.next;
};

//Delete last node
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) return;
  if (this.head.next == null) {
    this.head = null;
  }
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

//Delete a node at given Key
LinkedList.prototype.deleteAtGivenKey = function (key) {
  if (!this.head) return;
  if (this.head.next === key) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  while (current.data != null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log("No node found with the given key: ", key);
};
//search in a linkedList
LinkedList.prototype.Search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    } else {
      return false;
    }
  }
};
// reverse a linkedlist

LinkedList.prototype.reverseLinkedList = function () {
  let next = null;
  let previous = null;
  let current = this.head;
  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
};

const myLinkedList1 = new LinkedList();
myLinkedList1.insertAtBeggining(4);
myLinkedList1.insertAtEnd(7);
myLinkedList1.reverseLinkedList();
console.log(myLinkedList1.printLinkedList());
console.log(myLinkedList1);

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertAtBeginnig = function (data) {
  const newNode = new Node(data, this.head, null);
  if (this.head != null) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }
};
//insert at end of the linkedlist
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);
  if (this.tail != null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  }
};

// print doubly linked list

DoublyLinkedList.prototype.printList = function () {
  let list = [];
  let curr = this.head;
  while (curr != null) {
    list.push(curr.data + " ");
    curr = curr.next;
  }
  return list;
};

//search in an doubly linked list

DoublyLinkedList.prototype.search = function (key) {
  let curr = this.head;
  while (curr) {
    if (curr.data === key) {
      return true;
    }
    curr = curr.next;
  }
  return false;
};
// insert at given key

DoublyLinkedList.prototype.insertAtGivenNode = function (givenNode, data) {
  const newNode = new Node(data, givenNode.next, givenNode);
  if (givenNode != null) {
    givenNode.next.prev = newNode;
  }
  givenNode.next = newNode;
  if (newNode.next === null) {
    this.tail = newNode;
  }
};

// delete first Node

DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  if (this.head === this.tail) {
    this.head = this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};
// delete last node
DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) {
    return;
  }
  if (this.tail === this.head) {
    this.tail = this.head = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

// reverse doubly linked List
DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;
  while (current) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }
  if (temp != null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.insertAtBeginnig(5);
myDoublyLinkedList.insertAtEnd(6);
myDoublyLinkedList.insertAtEnd(7);
myDoublyLinkedList.insertAtGivenNode(myDoublyLinkedList.head.next, 8);
myDoublyLinkedList.insertAtGivenNode(myDoublyLinkedList.head.next.next, 9);
myDoublyLinkedList.deleteLastNode();
myDoublyLinkedList.reverse();

console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.search(6));

/* 
$ node LinkedList/doublyLinkedList.js
DoublyLinkedList {
  head: <ref *1> Node {
    data: 9,
    next: Node { data: 8, next: [Node], prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    data: 5,
    next: null,
    prev: Node { data: 6, next: [Circular *2], prev: [Node] }
  }
}
[ '9 ', '8 ', '6 ', '5 ' ]
true

*/

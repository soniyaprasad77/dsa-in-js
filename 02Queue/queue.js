class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }
  dequeue() {
    this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  contains(element) {
    return this.queue.includes(element);
  }
  containsWithLoop(element) {
    let bool = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] === element) {
        bool = true;
      }
    }
    return bool;
  }
  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.dequeue();
console.log(myQueue.printQueue());
console.log(myQueue.containsWithLoop(3));
console.log(myQueue.containsWithLoop(8));
console.log(myQueue.contains(1));

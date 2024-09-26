class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  contains(element) {
    return this.stack.includes(element);
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

const mystack = new Stack();
mystack.push(8);
mystack.push(9);
mystack.push(10);
console.log(mystack);
console.log(mystack.contains(10));
mystack.pop();
console.log(mystack.contains(10));
console.log(mystack.printStack());

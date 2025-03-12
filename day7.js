//? Day 7: Stacks, Queues & Recursion
//* Session Focus: Stack and queue operations, recursive problem-solving techniques.
//? Session Practice Questions:
//! Implement a stack using an array.
class Stack {
  constructor(size = +Infinity) {
    this.stack = []; // for holding the data
    this.size = size; // the max size
    this.top = -1; // current position of the last inserted element
  }

  isEmpty() {
    return this.top == -1;
  }

  isFull() {
    return this.top + 1 == this.size;
  }

  push(data) {
    if (this.isFull()) {
      return "Stack Overflow";
    }
    this.top++;
    this.stack.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    this.top--;
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.top];
  }
  toArray() {
    return [...this.stack];
  }
}

//! Check for balanced parentheses in an expression.
function isBalanced(str = "") {
  const stack = new Stack();
  const obj = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let paran of str) {
    if (paran == "(" || paran == "[" || paran == "{") {
      stack.push(paran);
    } else if (paran == ")" || paran == "]" || paran == "}") {
      if (stack.isEmpty() || obj[paran] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
// const testCases = [
//   {
//     input: "()",
//     expected: true,
//   },
//   {
//     input: "({[()]})",
//     expected: true,
//   },
//   {
//     input: "([)]",
//     expected: false,
//   },
//   {
//     input: "(((",
//     expected: false,
//   },
//   {
//     input: "",
//     expected: true, // An empty string is trivially balanced
//   },
//   {
//     input: "((()))",
//     expected: true,
//   },
//   {
//     input: "{[({[()]})]}",
//     expected: true,
//   },
//   {
//     input: "{[({[())]}",
//     expected: false,
//   },
//   {
//     input: "{[]",
//     expected: false,
//   },
// ];
// testCases.forEach(({ input, expected }) => {
//   const result = isBalanced(input);
//   console.log(`Input: "${input}" => Expected: ${expected}, Got: ${result}`);
//   console.assert(result === expected, `Test failed for input: "${input}"`);
// });
//! Reverse a string using a stack.
function reverse(str = "") {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}
// console.log(reverse("Hello everyone!...."));
//! Find the next greater element for each array element.
function nextGreaterElement(arr) {
  //O(n**2)
  // for (let ind = 0; ind < arr.length; ind++){
  //     let res = -1;
  //     for (let ind1 = ind + 1; ind1 < arr.length; ind1++){
  //         if (arr[ind] < arr[ind1]) {
  //             res = arr[ind1];
  //             break;
  //         }
  //     }
  //     arr[ind] = res;
  // }
  // return arr;
  const stack = new Stack();
  let res = Array(arr.length).fill(-1);
  for (let ind = 0; ind < arr.length; ind++) {
    while (!stack.isEmpty() && arr[stack.peek()] < arr[ind]) {
      res[stack.pop()] = arr[ind];
    }
    stack.push(ind);
  }
  return res;
}

// console.log(nextGreaterElement([4, 5, 2, 25]));
// console.log(nextGreaterElement([13, 7, 6, 12]));
//! Implement a queue using two stacks.
function Queue() {
  const stack1 = [];
  const stack2 = [];

  return {
    enqueue: (data) => {
      stack1.push(data);
    },
    dequeue: () => {
      if (stack1.length == 0 && stack2.length == 0) return "Queue is empty";
      if (stack2.length == 0)
        while (stack1.length) {
          stack2.push(stack1.pop());
        }
      return stack2.pop();
    },
  };
}

// const queue = Queue();
// queue.enqueue(1);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4)
// queue.enqueue(5);
// console.log(queue.dequeue());
// console.log(queue.dequeue())
// console.log(queue.dequeue());
// queue.enqueue(6);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
//! Design a browser’s forward and backward navigation (stack-based).
function browserHistory() {
  const history = [];
  const forwardHistory = [];
  return {
    visit: (page) => {
      history.push(page);
      forwardHistory.length = 0;
      return `Currently viewing ${history[history.length - 1]}`;
    },
    back: () => {
      if (history.length == 1) return "No more pages in the history";
      forwardHistory.push(history.pop());
      return `Currently viewing ${history[history.length - 1]}`;
    },
    forward: () => {
      if (forwardHistory.length == 0)
        return "No more pages in the forward history";
      history.push(forwardHistory.pop());
      return `Currently viewing ${history[history.length - 1]}`;
    },
  };
}
// const myBrowser = browserHistory();
// console.log(myBrowser.visit("Page 1"));
// console.log(myBrowser.visit("Page 2"));
// console.log(myBrowser.visit("Page 3"));
// console.log(myBrowser.back());
// console.log(myBrowser.back());
// console.log(myBrowser.visit("page 4"));
// console.log(myBrowser.back());
// console.log(myBrowser.forward());
// console.log(myBrowser.forward());
// console.log(myBrowser.forward());




// todo Post-Session Practice Questions:


class circularQueue {
  constructor(size = 4) {
    this.stack = new Array(size);
    this.size = size;
    this.top = -1;
    this.maxStack = [];
  }

  isEmpty() {
    return this.top == -1;
  }

  isFull() {
    console.log(this.size)
    return this.top + 1 == this.size;
  }

  enqueue(data) {
    if (this.isFull()) {
      return "Stack Overflow";
    }
    this.top++;
    this.stack[this.top] = (data);
    if (this.maxStack.length === 0 || data >= this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.push(data);
    }
    console.log(this.maxStack)

  }
  getMax() {
    return this.isEmpty() ? "Stack is empty" : this.maxStack[this.maxStack.length - 2];
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    this.top--;
    const remove = this.stack.shift()
    if (remove === this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.pop();
    }
    return remove;
  }

  frontElement() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }
    return this.stack[0]
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.top];
  }
  toArray() {
    return [...this.stack];
  }

}

// todo Implement a circular queue.

const cq = new circularQueue(4);

// cq.enqueue(20);
// cq.enqueue(10);
// cq.enqueue(30);
// cq.enqueue(40);
// console.log(cq.toArray());
// console.log(cq.dequeue());
// console.log(cq.toArray());
// console.log(cq.toArray());
// console.log(cq.frontElement());
// console.log(cq.isFull());
// console.log(cq.isEmpty());
// console.log(cq.toArray())



// todo Find the maximum element in a stack in constant time.
// console.log(cq.getMax())
// cq.dequeue()
// cq.dequeue()
// console.log(cq.getMax())



// todo Sort a stack using recursion.

function sortedInsert(stack, element) {
  if (stack.length === 0 || stack[stack.length - 1] <= element) {
    stack.push(element);
    return;
  }

  let temp = stack.pop();
  sortedInsert(stack, element);
  stack.push(temp);
}

function sortStack(stack) {
  if (stack.length === 0) return;

  let temp = stack.pop();
  sortStack(stack);
  sortedInsert(stack, temp);
}


let stack = [3, 1, 4, 2, 5];
// console.log("Original Stack:", [...stack]);

sortStack(stack);
// console.log("Sorted Stack:", stack);


// todo Design a data structure supporting min, max, push, and pop in constant time.

class designData {
  constructor() {
    this.stack = [];
    this.size = -Infinity
    this.top = -1
  }
  isEmpty() {
    if (this.top === -1) return true;
    return false;
  }
  isFull() {
    return this.stack.length <= this.size;
  }
  push(data) {
    if (this.isFull()) return "Stack Overflow";
    this.top++;
    console.log(this.top)
    this.stack.push(data);
  }
  pop() {
    if (this.isEmpty()) return 'Queue is empty';
    this.top--;
    this.stack.pop();
  }
  getStack() {
    if (this.top === -1) return 'Queue is empty'
    return [...this.stack]
  }
  sort() {
    if (this.isEmpty()) return 'Queue is empty';
    this.stack.sort((a, b) => a - b)
  }
  minMaxsort(data) {
    if (this.isEmpty()) return 'Queue is empty';
    return data.sort((a, b) => a - b)

  }
  getMin() {
    if (this.isEmpty()) return 'Queue is empty';
    let newArr = [...this.stack];
    let sortArr = this.minMaxsort(newArr)
    return sortArr[0]
  }
  getMax() {
    if (this.isEmpty()) return 'Queue is empty';
    let newArr = [...this.stack];
    let sortArr = this.minMaxsort(newArr)
    return sortArr[sortArr.length - 1]
  }
  reverseKElements(k) {
    if (this.isEmpty()) return 'Queue is empty';
    const arr = [...this.stack];
    let split = arr.splice(0, k - 1)
    split.reverse()
    return [...split, ...arr]

  }

}
const design = new designData();
console.log(design.isEmpty())
console.log(design.getStack())
design.push(5)
// design.push(10)
design.push(15)
// design.push(20)
design.push(25)
// design.push(30)
design.push(35)
design.push(45)
design.push(55)
// design.push(40)
// design.pop()
console.log(design.getMin())
console.log(design.getMax())
design.sort()
console.log(design.getStack())
console.log(design.isEmpty())


// todo Reverse the first k elements of a queue.

console.log(design.getStack())
console.log(design.reverseKElements(5))

// todo Find the minimum element in a stack.
console.log(design.getStack())
console.log(design.getMin())

// todo Implement a priority queue.

class priorityQueue {
  constructor() {
    this.stack = [];
    this.top = -1;
  }
  isEmpty() {
    if (this.top === -1) return true;
    return false;
  }
  push(task, data) {
    this.top++;
    console.log(this.top)
    const node = { task, data }
    this.stack.push(node);
  }
  pop() {
    if (this.isEmpty()) return 'Queue is empty';
    this.top--;
    this.stack.pop();
  }
  getStack() {
    if (this.top === -1) return 'Queue is empty'
    return [...this.stack]
  }

  sortReverse(data) {
    if (this.isEmpty()) return 'Queue is empty';


    console.log(data)
    data = data.sort((a, b) => a - b)
    console.log(data.sort((a, b) => a - b))

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[i].data > data[j].data) {
          [data[i], data[j]] = [data[j], data[i]];
        }
      }
    }
    console.log(data)

    return data

  }
  peek() {
    const newArr = [...this.stack];

    return newArr.length ? newArr[0] : null;
  }

}

const pq = new priorityQueue();
// pq.push("Task A", 3);
// pq.push("Task B", 1);
// pq.push("Task C", 2);
// console.log(pq.getStack())
// pq.pop()
// console.log(pq.getStack())
// console.log(pq.peek());

// todo Check if a string can be reduced to an empty string by recursive removal of adjacent duplicates.

function canReduceToEmptyString(s) {
  let stack = [];

  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Example usage
// console.log(canReduceToEmptyString("abbaca"));
// console.log(canReduceToEmptyString("abccba"));
// console.log(canReduceToEmptyString("aabbcc"));
// console.log(canReduceToEmptyString("abc"));
// console.log(canReduceToEmptyString("abba"));

// todo Design a system that supports efficient insertion and retrieval of most recent elements (deque).
class Deque {
  constructor() {
    this.items = [];
  }

  pushFront(value) {
    this.items.unshift(value);
  }

  pushBack(value) {
    this.items.push(value);
  }

  popFront() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  popBack() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  back() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const deque = new Deque();
deque.pushBack(1);
deque.pushBack(2);
deque.pushFront(0);
console.log(deque.front());
console.log(deque.back());
deque.popFront();
deque.popBack();
console.log(deque.isEmpty()); 

// ------------------xxxxxxxxxxxxxxx___END___xxxxxxxxxxxxxxx------------------
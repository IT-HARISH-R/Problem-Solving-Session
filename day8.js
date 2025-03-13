//? Day 8: Linked Lists
//* Session Focus: Introduction to linked lists and basic operations: insertion, deletion, and traversal.
//? Session Practice Questions:
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
  //! Insert a node at the beginning of a linked list.
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  insertLast(data) {
    if (this.head == null) this.head = new Node(data);
    else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }
  //! Delete the last node in a linked list.
  deleteLast() {
    if (this.head == null) return null;
    else if (this.head.next == null) {
      let data = this.head.data;
      this.head = null;
      return data;
    } else {
      let current = this.head;
      while (current.next.next != null) {
        current = current.next;
      }
      let data = current.next.data;
      current.next = null;
      return data;
    }
  }
  //! Reverse a linked list iteratively.
  reverse() {
    let prev = null;
    let current = this.head;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  //! Find the middle node of a linked list.
  middleNode() {
    // fast and slow pointer
    let fast = this.head; // Hari
    let slow = this.head; //Pugazh
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.data;
  }
  //! Detect a cycle in a linked list using fast and slow pointers.
  hasCycle() {
    let fast = this.head;
    let slow = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast == slow) {
        return true;
      }
    }
    return false;
  }

  /// needed only when you're in a position to explain this to a group of audience;
  makeCycle(pos) {
    let x = this.head;
    let y = this.head;
    let count = 1;
    while (x.next != null) {
      if (pos == count) {
        y = x;
        break;
      }
      x = x.next;
      count++;
    }
    x.next = y;
  }
  toArray() {
    let arr = [];
    let current = this.head;
    while (current != null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  //! Remove duplicates from a sorted linked list.
  removeDuplicates() {
    let fast = this.head;
    let slow = this.head;
    while (fast != null) {
      if (fast.data !== slow.data) {
        slow = slow.next;
        slow.data = fast.data;
      }
      fast = fast.next;
    }
    slow.next = null;
  }
}
// [head] -> [10,-]--> [20, -]--> [30, -]--> null
const list = new LinkedList();
Array.from({ length: 10 }, (v, i) => Math.floor(Math.random() * 5))
  .sort((a, b) => a - b)
  .forEach((x) => list.insertLast(x));
// console.log(list.toArray());
list.removeDuplicates()
// console.log(list.toArray());

// list.insertFirst(10);
// list.insertLast(20);
// list.insertFirst(30);
// list.insertLast(40);
// list.insertFirst(50);
// console.log(list);
// list.reverse();
// console.log(list);
// console.log(list.middleNode());
// // list.makeCycle(Math.floor(Math.random() * 10));
// console.log(list.hasCycle());
// console.log(list.deleteLast());
// console.log(list);
// console.log(list.deleteLast());
// console.log(list);
// console.log(list.deleteLast());
// console.log(list);
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// todo Post-Session Practice Questions:

// todo Reverse a linked list recursively.

class Node1 {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;

  }

  getList() {
    return this.head
  }
  insertFirst(data) {
    this.head = new Node1(data, this.head)
    console.log(this.head)
  }
  insertLast(data) {
    if (this.head === null) this.head = new Node(data)
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node1(data)
    }
  }

  reverse(head) {
    let prev = null;
    let current = head;

    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  reverseRecursive(node = this.head) {
    console.log('p')

    if (!node || !node.next) {
      this.head = node
      return node
    }

    let newHead = this.reverseRecursive(node.next)

    console.log(newHead)
    node.next.next = node;
    node.next = null;

    return newHead

  }
  isPalindrome() {
    if (!this.head || !this.head.next) return true;


    let slow = this.head, fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }


    let reverseHead = this.reverse(slow);
    let first = this.head, second = reverseHead;
    let isPalindrome = true;


    while (second) {
      if (first.data !== second.data) {
        isPalindrome = false;
        break;
      }
      first = first.next;
      second = second.next;
    }


    this.reverse(reverseHead);

    return isPalindrome;
  }
  removeNthFromEnd(n) {
    let dummy = new Node1(0);
    dummy.next = this.head;
    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
      if (first === null) return
      first = first.next;
    }

    while (first) {
      first = first.next;
      second = second.next;
    }
    second.next = second.next.next;

    this.head = dummy.next;
  }

}

// ------------------------------------------List END

const list1 = new List()
// list1.insertFirst(1)
// list1.insertFirst(3)
list1.insertLast(1);
list1.insertLast(2);
list1.insertLast(3);
list1.insertLast(4);
list1.insertLast(5);

console.log(list1.getList())

// todo Reverse a linked list recursively.
console.log(list1.getList())
// list1.reverseRecursive()
console.log(list1.getList())

// todo Check if a linked list is a palindrome.
console.log(list1.getList())
console.log(list1.isPalindrome())
console.log(list1.getList())


// todo Remove the n-th node from the end of a linked list.
console.log(list1.getList())

list1.removeNthFromEnd(2)

console.log(list1.getList())
// todo Find the intersection point of two linked lists.
class NodeA {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}


function intersectPoint(head1, head2) {

  console.log(head1)
  console.log(head2)
  while (head2 !== null) {
    let temp = head1;
    while (temp !== null) {

      if (temp === head2) {

      }
      return head2.data;
      temp = temp.next;
    }
    head2 = head2.next;
  }

  return -1;
}



let head1 = new NodeA(10);
head1.next = new NodeA(15);
head1.next.next = new NodeA(30);
head1.next.next.next = new NodeA(70);


let head2 = new NodeA(3);
head2.next = new NodeA(6);
head2.next = new NodeA(2);
head2.next.next = new NodeA(9);


head2.next.next.next = head1.next;
console.log(head1)
console.log(intersectPoint(head1, head2))

// todo Flatten a multilevel doubly linked list.
class NodeB {
  constructor(val, prev = null, next = null, child = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
  }
}
let head = new NodeB(1);
head.next = new NodeB(2);
head.next.prev = head;

head.next.child = new NodeB(3);
head.next.child.next = new NodeB(4);
head.next.child.next.prev = head.next.child;

head.next.next = new NodeB(5);
head.next.next.prev = head.next;
console.log(head)


// todo Add two numbers represented by linked lists.
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));

// todo Partition a linked list around a value x.

class ListNodeA {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function partition(head, x) {
  let beforeHead = new ListNodeA(0);
  let before = beforeHead;
  let afterHead = new ListNodeA(0);
  let after = afterHead;

  while (head) {
    if (head.value < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }

  after.next = null;
  before.next = afterHead.next;

  return beforeHead.next;
}



// Create Linked List: 1 -> 4 -> 3 -> 2 -> 5 -> 2
let headA = new ListNodeA(1);
headA.next = new ListNodeA(4);
headA.next.next = new ListNodeA(3);
headA.next.next.next = new ListNodeA(2);
headA.next.next.next.next = new ListNodeA(5);
headA.next.next.next.next.next = new ListNodeA(2);



console.log(partition(headA, 3));



// todo Clone a linked list with random pointers.
// todo Split a linked list into two halves.





// todo Merge two sorted linked lists.
// todo Sort a linked list using merge sort.

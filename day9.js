//? Day 9: Trees
//* Session Focus: Introduction to binary trees and binary search trees, basic operations, and traversals.
//? Session Practice Questions:
class BinaryTree {
  constructor() {
    this.tree = [];
  }

  insert(data) {
    this.tree.push(data);
  }
  displayTree() {
    const height = this.height();
    const width = Math.pow(2, height); // Max width for the tree visualization
    let result = new Array(height)
      .fill(null)
      .map(() => new Array(width).fill(" "));

    // Helper function to fill the result array
    const fill = (nodeIndex, row, col, width) => {
      if (nodeIndex >= this.tree.length) return;

      result[row][col] = (this.tree[nodeIndex] + "").padStart(3, "0") + " ";
      const gap = Math.pow(2, height - row - 1) - 1;
      fill(2 * nodeIndex + 1, row + 1, col - gap, width); // Left child
      fill(2 * nodeIndex + 2, row + 1, col + gap, width); // Right child
    };

    // Start filling the result array from the root
    fill(0, 0, Math.floor(width / 2), width);

    // Convert result array into a string to represent the tree
    for (let row of result) {
      console.log(row.join(""));
    }
  }

  //* Perform a pre-order traversal of a binary tree.
  preorderTraversal(root = 0) {
    if (this.tree[root]) {
      console.log(this.tree[root]);
      this.preorderTraversal(2 * root + 1);
      this.preorderTraversal(2 * root + 2);
    }
  }

  inorderTraversal(root = 0) {
    if (this.tree[root]) {
      this.inorderTraversal(2 * root + 1);
      console.log(this.tree[root]);
      this.inorderTraversal(2 * root + 2);
    }
  }
  postorderTraversal(root = 0) {
    if (this.tree[root]) {
      this.postorderTraversal(2 * root + 1);
      this.postorderTraversal(2 * root + 2);
      console.log(this.tree[root]);
    }
  }
  //* Count the number of leaf nodes in a binary tree.
  countLeafs(root = 0) {
    if (this.tree[root] == undefined) return 0;
    if (
      this.tree[2 * root + 1] == undefined &&
      this.tree[2 * root + 2] == undefined
    )
      return 1;
    return this.countLeafs(2 * root + 1) + this.countLeafs(2 * root + 2);
    //   return Math.floor((this.tree.length +1) /2)
  }
  //* Find the height of a binary tree.
  height(root = 0) {
    if (this.tree[root] == undefined) return 0;
    return 1 + Math.max(this.height(2 * root + 1), this.height(2 * root + 2));
  }
  //* Find all root-to-leaf paths in a binary tree.
  rootToLeafPaths(path = [], root = 0) {
    if (this.tree[root] == undefined) return;
    path.push(this.tree[root]);
    if (
      this.tree[root * 2 + 1] == undefined &&
      this.tree[root * 2 + 2] == undefined
    ) {
      console.log(path.join(" -> "));
    }
    this.rootToLeafPaths(path, root * 2 + 1);
    this.rootToLeafPaths(path, root * 2 + 2);
    path.pop();
  }

  //* Check if a binary tree is a binary search tree (BST).
  isBST(root = 0) {
    if (this.tree[root] == undefined) return true;
    if (
      this.tree[2 * root + 1] != undefined &&
      this.tree[2 * root + 1] > this.tree[root]
    )
      return false;
    if (
      this.tree[2 * root + 2] != undefined &&
      this.tree[2 * root + 2] < this.tree[root]
    )
      return false;
    return this.isBST(2 * root + 1) && this.isBST(2 * root + 2);
  }
}

// const tree = new BinaryTree();
// tree.insert(7);
// tree.insert(3);
// tree.insert(12);
// tree.insert(2);
// tree.insert(5);
// tree.insert(10);
// tree.insert(15);
// console.log("Pre Order");
// tree.preorderTraversal();
// console.log("In Order");
// tree.inorderTraversal();
// console.log("Post Order");
// tree.postorderTraversal();
// for (let ind = 0; ind < 15; ind++) {
//   console.log("No Of Nodes", ind, "Leafs Count :::", tree.countLeafs());
//   tree.insert(ind + 1);
// }
// tree.displayTree();
// console.log("Height of Binary Tree is ::", tree.height());

// tree.rootToLeafPaths();
// console.log("Is Binary Tree a BST ::", tree.isBST());

//! Find the lowest common ancestor (LCA) of two nodes in a BST.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null; // type Node
  }

  insert(data) {
    if (this.root == null) this.root = new Node(data);
    else {
      let curr = this.root;
      // loop?
      while (true) {
        if (curr.data < data) {
          if (curr.right == null) {
            curr.right = new Node(data);
            break;
          } else {
            curr = curr.right;
          }
        } else {
          if (curr.left == null) {
            curr.left = new Node(data);
            break;
          } else {
            curr = curr.left;
          }
        }
      }
    }
  }
  height(root = this.root) {
    if (root == null) return 0;
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }
  displayTree() {
    const height = this.height();
    const width = Math.pow(2, height); // Max width for the tree visualization
    let result = new Array(height)
      .fill(null)
      .map(() => new Array(width).fill(" "));

    // Helper function to fill the result array
    const fill = (root, row, col, width) => {
      if (root == null) return;

      result[row][col] = (root.data + "").padStart(3, "0") + " ";
      const gap = Math.pow(2, height - row - 1) - 1;
      fill(root.left, row + 1, col - gap, width); // Left child
      fill(root.right, row + 1, col + gap, width); // Right child
    };

    // Start filling the result array from the root
    fill(this.root, 0, Math.floor(width / 2), width);

    // Convert result array into a string to represent the tree
    for (let row of result) {
      console.log(row.join(" "));
    }
  }

  inorder(root = this.root) {
    if (root == null) return;
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
  }
  preorder(root = this.root) {
    if (root == null) return;
    console.log(root.data);
    this.preorder(root.left);
    this.preorder(root.right);
  }
  postorder(root = this.root) {
    if (root == null) return;
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.data);
  }

  findLCA(data1, data2, root = this.root) {
    if (root == null) return null;
    if (root.data == data1 || root.data == data2) return root.data;
    let left = this.findLCA(data1, data2, root.left);
    let right = this.findLCA(data1, data2, root.right);
    if (left != null && right != null) return root.data;
    if (left != null) return left;
    if (right != null) return right;
    return null;
  }
}

const bst = new BST();
bst.insert(35);
bst.insert(12);
bst.insert(30);
bst.insert(10);
bst.insert(25);
bst.insert(15);
bst.insert(20);
bst.insert(40);
bst.insert(45);
bst.insert(50);
bst.insert(28);
bst.insert(37);
bst.insert(48);
bst.insert(11);
// bst.displayTree();
// console.log("In Order ");
// bst.inorder();
// console.log("Pre Order ");
// bst.preorder();
// console.log("Post Order");
// bst.postorder();
console.log("LCA of 10 and 20 is ::", bst.findLCA(10, 20));
console.log("LCA of 28 and 20 is ::", bst.findLCA(28, 20));
console.log("LCA of 28 and 48 is ::", bst.findLCA(28, 48));
console.log("LCA of 11 and 25 is ::", bst.findLCA(11, 25));
console.log("LCA of 11 and 15 is ::", bst.findLCA(11, 15));

// // todo Post-Session Practice Questions:

// // todo Perform an in-order traversal iteratively.

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}
class Tree {
  constructor() {
    this.root = null
  }

  insertTree(data) {
    if (this.root == null) this.root = new TreeNode(data);
    else {
      let curr = this.root;

      while (true) {
        if (curr.data < data) {
          if (curr.right === null) {
            curr.right = new TreeNode(data);
            break;
          }
          else {
            curr = curr.right;
          }
        }
        else {
          if (curr.left === null) {
            curr.left = new TreeNode(data);
            break
          }
          else {
            curr = curr.left;
          }
        }
      }
    }
  }


  inorderIterative() {
    let result = [];
    let stack = [];
    let curr = this.root;

    while (curr !== null || stack.length > 0) {
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      result.push(curr.data);
      curr = curr.right;
    }
    return result;
  }

  sumOfNodes(root = this.root) {
    if (root === null) return 0;

    return root.data + this.sumOfNodes(root.left) + this.sumOfNodes(root.right);
  }
  diameterOfTree(root = this.root) {
    if (root === null) return 0;

    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);

    const leftDiameter = this.diameterOfTree(root.left);
    const rightDiameter = this.diameterOfTree(root.right);

    return Math.max(leftHeight + rightHeight, leftDiameter, rightDiameter);
  }

  height(node) {
    if (node === null) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  isIdentical(tree1, tree2) {


    if (!tree1 && !tree2) return true;


    if (!tree1 || !tree2) return false;


    return (
      tree1.data === tree2.data &&
      this.isIdentical(tree1.left, tree2.left) &&
      this.isIdentical(tree1.right, tree2.right)
    )

  }

  inorder(root = this.root, result = []) {
    if (root === null) return result
    this.inorder(root.left, result)
    result.push(root.data)
    this.inorder(root.right, result)
    return result
  }

  preorder(root = this.root, result = []) {
    if (root === null) return result
    result.push(root.data)
    this.preorder(root.left, result)
    this.preorder(root.right, result)
    return result
  }

  postOrder(root = this.root, result = []) {
    if (root === null) return result;

    this.postOrder(root.left, result)
    this.postOrder(root.right, result);
    result.push(root.data)

    return result
  }

  printKDistance(k) {
    if (!this.root || k < 0) return [];

    let queue = [{ node: this.root, level: 0 }];
    let result = [];

    while (queue.length > 0) {
        let { node, level } = queue.shift();

        if (level === k) {
            result.push(node.data);
        }

        if (level < k) {  // No need to explore further if we've reached level k
            if (node.left) queue.push({ node: node.left, level: level + 1 });
            if (node.right) queue.push({ node: node.right, level: level + 1 });
        }
    }

    console.log(`Nodes at distance ${k} from root:`, result);
    return result;
}


}

const tree = new Tree()

// tree.insertTree(20);
// tree.insertTree(10);
// tree.insertTree(30);
// tree.insertTree(5);
// tree.insertTree(15);
// tree.insertTree(25);
// tree.insertTree(35);
// tree.insertTree(3);
// tree.insertTree(7);
// tree.insertTree(6);


console.log(tree.inorder())
console.log(tree.inorderIterative())


// // todo Calculate the sum of all nodes in a binary tree.


console.log(tree.inorderIterative())
console.log(tree.sumOfNodes())


// // todo Find the diameter of a binary tree.

console.log(tree.diameterOfTree())


// // todo Check if two binary trees are identical.

const TreeA = new Tree()

TreeA.insertTree(4)
TreeA.insertTree(5)
TreeA.insertTree(3)
TreeA.insertTree(2)
TreeA.insertTree(1)


const TreeB = new Tree()

TreeB.insertTree(4)
TreeB.insertTree(5)
TreeB.insertTree(3)
TreeB.insertTree(2)
TreeB.insertTree(1)

console.log(tree.isIdentical(TreeA.root, TreeB.root))

// // todo Convert a binary tree to a doubly linked list.

const treeC = new Tree();

treeC.insertTree(20);
treeC.insertTree(10);
treeC.insertTree(30);
treeC.insertTree(5);
treeC.insertTree(15);
treeC.insertTree(25);
treeC.insertTree(35);


console.log(treeC.inorder())

// // todo Construct a binary tree from its inorder and preorder traversals.


const treeD = new Tree();
treeD.insertTree(4);
treeD.insertTree(2);
treeD.insertTree(6);
treeD.insertTree(1);
treeD.insertTree(3);
treeD.insertTree(5);
treeD.insertTree(7);

console.log("Inorder:", treeD.inorder());   // Expected: [1, 2, 3, 4, 5, 6, 7]
console.log("Preorder:", treeD.preorder()); // Expected: [4, 2, 1, 3, 6, 5, 7]



// // todo Print all nodes at k distance from the root.
const treeE = new Tree();

treeE.root = new TreeNode(1);
treeE.root.left = new TreeNode(2);
treeE.root.right = new Node(3);
treeE.root.left.left = new Node(4);
treeE.root.left.right = new Node(5);
treeE.root.right.left = new Node(6);
treeE.root.right.right = new Node(7);

console.log(treeE.inorder())
console.log(treeE.preorder())
console.log(treeE.postOrder())

console.log(treeE.printKDistance(2))



// // todo Find the level with the maximum sum in a binary tree.
// // todo Calculate the depth of the deepest leaf node.
// // todo Convert a BST to a balanced BST.

// // todo Serialize and deserialize a binary tree.

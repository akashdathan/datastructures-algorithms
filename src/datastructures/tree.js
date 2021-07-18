
/*

BINARY TREE

- max nodes at level(l) = 2 power l
- max nodes in a tree with height h = 2 power h - 1 => (min h = Log2(N+1))
- L(leaves) <=  2^(l-1)
- the number of leaf nodes is always one more than nodes with two children

Binary Tree: only two children
Binary Search Tree: leftNode < rootNode < rightNode

TYPES
- Full Binary tree: Every node has 0 or 2 children
- Complete Binary Tree: All levels except last level is completely filled
- Perfect Binary Tree: Its Full and Complete ( L = I + 1 )
- TBD: Balanced Binary Tree: A binary tree is balanced if the height of the tree is O(Log n) where n is the number of nodes.

TBD
- Handshaking Lemma and Interesting Tree Properties
- catlan numbers: https://www.geeksforgeeks.org/enumeration-of-binary-trees/


OPERATIONS
- Insert
- Search
- Traversals
  - Breadth First Search (Level Order)
  - Depth First Search
    - Inorder Traversal (Left Root Right)
    - Preorder Traversal (Root Left Right)
    - Postorder Traversal (Left Right Root)

*/

/*
            5
          /   \
         10   15
        /       \
       20       25
*/
const initialTree = {
  data: 5,
  left: {
    data: 10,
    left: {
      data: 20,
      left: null,
      right: null,
    },
    right: null
  },
  right: {
    data: 15,
    left: null,
    right: {
      data: 25,
      left: null,
      right: null
    }
  }
}

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preorder() {
    // Root, Left, Right
    const visited = [];

    const traverse = node => {
      if (!node) return;

      visited.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    console.log(...visited);
    return visited;
  }

  inorder() {
    // Left, Root, Right
    const visited = [];

    const traverse = node => {
      if(!node) return;

      traverse(node.left);
      visited.push(node.data);
      traverse(node.right);
    }

    traverse(this.root);
    console.log(...visited);
    return visited
  }

  postorder() {
    // Right, Root, Left
    const visited = [];

    const traverse = node => {
      if (!node) return;

      traverse(node.right);
      visited.push(node.data);
      traverse(node.left);
    }

    traverse(this.root);

    console.log(...visited);
    return visited;
  }

  leftView() {
    const viewItems = [];

    const traverse = node => {
      if (!node) return;

      traverse(node.left);
      viewItems.push(node.data);
    }

    traverse(this.root);
    console.log(...viewItems);

    return viewItems;
  }

  topView() {
    const viewItems = [];

    const traverseLeft = node => {
      if (!node) return;

      traverseLeft(node.left);
      viewItems.push(node.data);
    }

    const traverseRight = node => {
      if (!node) return;

      viewItems.push(node.data);
      traverseRight(node.right);
    }

    traverseLeft(this.root.left);
    viewItems.push(this.root.data);
    traverseRight(this.root.right);

    console.log(...viewItems);

    return viewItems;
  }
}

const bTree = new BinaryTree(initialTree);

console.log('PREORDER');
bTree.preorder()

console.log('INORDER');
bTree.inorder();

console.log('POSTORDER')
bTree.postorder();

console.log('LEFT VIEW');
bTree.leftView();

console.log('TOP VIEW');
bTree.topView();



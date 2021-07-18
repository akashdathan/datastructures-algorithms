

/*
            5
          /   \
         2    15
          \     \
          20     25
*/
const initialTree = {
  data: 5,
  left: {
    data: 2,
    right: {
      data: 20,
      left: null,
      right: null,
    },
    left: null
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

class BinarySearchTree {
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

  insert(data) {
    const dataNode = new Node(data)
    if (!this.root) this.root = dataNode;

    const traverse = node => {
      if (data < node.data) {
        if (!node.left) {
          node.left = dataNode;
          return;
        } else {
          return traverse(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = dataNode;
          return;
        } else {
          return traverse(node.right);
        }
      }
    }

    return traverse(this.root);
  }
}

const bst = new BinarySearchTree(initialTree);

bst.preorder();

bst.insert(1);

bst.preorder();

bst.insert(30);

bst.preorder();

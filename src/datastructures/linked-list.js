
/*

Linked Lists

- Contains two classes
	- LinkedList: the class which is the linked list which contains all the functions specific to linked list
	- ListNode: The nodes of the linked list

	Basic Operations
	- Traversal
	- Insertion (at any position)
	- Deletion (delete a node)
	- Searching
	- Updating (update a node)
	- Sorting
	- Merge (merge 2 linked lists)

 */

class ListNode {
	constructor(data = null, next = null) {
		this.data = data;
		this.next = next;
	}
}


class LinkedList {
  constructor(head) {
    this.head = head || null;
  }

  reverse(node = this.head) {
    if (!node.next) {
      this.head = node;
      return;
    }

    const temp = node.next;
    temp.next = node;
    node.next = null;

  }

  updateItem(data, newData) {
    let currentItem = this.head;

    while (currentItem) {
      if (currentItem.data === data) {
        currentItem.data = newData;
        return;
      }

      currentItem = currentItem.next;
    }
  }

  deleteItem(data) {
    let currentItem = this.head;

    if (this.head.data === data) {
      this.head = this.head.next;
      return true;
    }

    while (currentItem.next) {
      if (currentItem.next.data === data) {
        currentItem.next = currentItem.next.next;
        return true;
      }

      currentItem = currentItem.next;
    }
  }

  insertFirst(data) {
    if (!this.head.data) this.head.data = data;

    this.head = new ListNode(data, this.head);
  }

  print(node = this.head, string = '', prefixExists) {
    if (node.data) {
      const prefix = prefixExists ? ' -> ' : ''
      string += prefix + node.data;
    }

    if (node.next) {
      return this.print(node.next, string, true)
    }

    console.log(string);
  }

  // Traversal
  getSum() {
    let node = this.head;
    let sum = node.data;

    while(node.next) {
      sum += node.next.data;
      node = node.next;
    }

    return sum;
  }
}


// 5 -> 10 -> 15 -> 20
const fourthNode = new ListNode(20);
const thirdNode = new ListNode(15, fourthNode);
const secondNode = new ListNode(10, thirdNode);
const firstNode = new ListNode(5, secondNode);

const listOne =  new LinkedList(firstNode);

// 5 -> 12 -> 13 -> 18 -> 30 -> 40
const nodeSix = new ListNode(40);
const nodeFive = new ListNode(30, nodeSix);
const nodeFour = new ListNode(18, nodeFive);
const nodeThree = new ListNode(13, nodeFour);
const nodeTwo = new ListNode(12, nodeThree);
const nodeOne = new ListNode(5, nodeTwo);

const listTwo =  new LinkedList(nodeOne);

// listOne.print();
//
// listOne.insertFirst(2);
//
// listOne.print();
//
// listOne.deleteItem(5)
//
// listOne.print();
//
// listOne.updateItem(10, 12);
//
// listOne.print();

// function mergeLists(listOne, listTwo) {
//   const emptyNode = new Node();
//   const mergedList = new LinkedList(emptyNode);
//
//   if (listone)
// }
//
// mergeLists(listOne, listTwo);



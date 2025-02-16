// Diberikan head dari sebuah double linked list dan sebuah nilai val, hapus semua node yang memiliki nilai sama dengan val dan kembalikan head dari linked list yang sudah dimodifikasi.

// Membangun double linked list: 1 <-> 2 <-> 3 <-> 2 <-> 4
// const head = new DoublyListNode(1);
// head.next = new DoublyListNode(2, head);
// head.next.next = new DoublyListNode(3, head.next);
// head.next.next.next = new DoublyListNode(2, head.next.next);
// head.next.next.next.next = new DoublyListNode(4, head.next.next.next);

// const newHead = removeElements(head, 2);
// let current = newHead;
// while (current !== null) {
//     console.log(current.val); // Output: 1, 3, 4
//     current = current.next;
// }

// PENYELESAIAN
class DoublyListNode {
  constructor(val, prev = null) {
    this.val = val;
    this.prev = prev;
    this.next = null;
    if (prev !== null) {
      prev.next = this;
    }
  }
}

function removeElements(head, val) {
  let current = head;
  let newHead = head;

  while (current !== null) {
    const nextNode = current.next;

    if (current.val === val) {
      // Perbarui pointer prev dan next dari node sekitar
      if (current.prev === null) {
        // Jika node saat ini adalah head, perbarui newHead
        newHead = nextNode;
      } else {
        current.prev.next = nextNode;
      }

      if (nextNode !== null) {
        nextNode.prev = current.prev;
      }
    }

    current = nextNode;
  }

  return newHead;
}

// Contoh penggunaan
const head = new DoublyListNode(1);
head.next = new DoublyListNode(2, head);
head.next.next = new DoublyListNode(3, head.next);
head.next.next.next = new DoublyListNode(2, head.next.next);
head.next.next.next.next = new DoublyListNode(4, head.next.next.next);

const newHead = removeElements(head, 2);

// Cetak hasil
let current = newHead;
while (current !== null) {
  console.log(current.val); // Output: 1, 3, 4
  current = current.next;
}

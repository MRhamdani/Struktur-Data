// Diberikan head dari sebuah singly linked list, balikkan (reverse) linked list tersebut dan kembalikan head dari linked list yang sudah dibalik.

// Membangun linked list: 1 -> 2 -> 3 -> 4 -> 5
// const head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
// const reversedHead = reverseList(head);
// let current = reversedHead;
// while (current !== null) {
//     console.log(current.val); // Output: 5, 4, 3, 2, 1
//     current = current.next;
// }

// PENYELESAIAN
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next; // Simpan node berikutnya
    current.next = prev; // Putar pointer ke belakang
    prev = current; // Geser prev ke depan
    current = nextNode; // Geser current ke node berikutnya
  }

  return prev; // prev sekarang menjadi head baru
}

// Contoh penggunaan
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reversedHead = reverseList(head);

// Cetak hasil
let current = reversedHead;
while (current !== null) {
  console.log(current.val); // Output: 5, 4, 3, 2, 1
  current = current.next;
}

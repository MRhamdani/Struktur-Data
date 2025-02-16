// Implementasikan struktur data queue menggunakan dua stack. Queue harus mendukung operasi berikut:

// 1. push(x): Menambahkan elemen x ke belakang queue.
// 2. pop(): Menghapus dan mengembalikan elemen dari depan queue.
// 3. peek(): Mengembalikan elemen di depan queue tanpa menghapusnya.
// 4. empty(): Mengembalikan True jika queue kosong, dan False jika tidak

// const queue = new MyQueue();
// queue.push(1);
// queue.push(2);
// console.log(queue.peek());  // Output: 1
// console.log(queue.pop());   // Output: 1
// console.log(queue.empty()); // Output: false

// PENYELESAIAN
class MyQueue {
  constructor() {
    this.stack1 = []; // Stack untuk operasi push
    this.stack2 = []; // Stack untuk operasi pop dan peek
  }

  push(x) {
    this.stack1.push(x);
  }

  pop() {
    if (this.stack2.length === 0) {
      // Pindahkan semua elemen dari stack1 ke stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      // Pindahkan semua elemen dari stack1 ke stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// Contoh penggunaan
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // Output: 1
console.log(queue.pop()); // Output: 1
console.log(queue.empty()); // Output: false

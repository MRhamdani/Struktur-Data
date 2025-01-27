class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // Menunjuk ke elemen depan
    this.rear = null; // Menunjuk ke elemen belakang
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null; // Queue kosong
    }
    const temp = this.front;
    this.front = this.front.next;
    this.size--;
    if (this.size === 0) {
      this.rear = null;
    }
    return temp.data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const [N, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/11279.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  heapifyUp(index) {
    const parentIdx = Math.floor((index - 1) / 2);
    if (parentIdx >= 0 && this.heap[parentIdx] < this.heap[index]) {
      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];
      this.heapifyUp(parentIdx);
    }
  }
  heapifyDown(index) {
    const len = this.heap.length;
    let biggest = index;
    const leftChild = index * 2 + 1;
    const rightChild = index * 2 + 2;

    if (leftChild < len && this.heap[leftChild] > this.heap[biggest]) {
      biggest = leftChild;
    }
    if (rightChild < len && this.heap[rightChild] > this.heap[biggest]) {
      biggest = rightChild;
    }

    if (biggest !== index) {
      [this.heap[biggest], this.heap[index]] = [
        this.heap[index],
        this.heap[biggest],
      ];
      this.heapifyDown(biggest);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  delete() {
    if (this.heap.length === 0) {
      return 0;
    }
    const max = this.heap[0];
    const lastIdx = this.heap.length - 1;
    this.heap[0] = this.heap[lastIdx];
    this.heap.pop();
    this.heapifyDown(0);

    return max;
  }
}

const maxHeap = new MaxHeap();
let result = [];
for (let i = 0; i < N; i++) {
  const x = arr[i];

  if (x !== 0) {
    maxHeap.insert(x);
  } else {
    result.push(maxHeap.delete());
  }
}
console.log(result.join("\n"));

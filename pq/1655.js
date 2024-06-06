const [N, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1655.txt"
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
      return null;
    }
    const max = this.heap[0];
    const lastIdx = this.heap.length - 1;
    this.heap[0] = this.heap[lastIdx];
    this.heap.pop();
    this.heapifyDown(0);

    return max;
  }
}
class MinHeap {
  constructor() {
    this.heap = [];
  }
  heapifyUp(index) {
    const parentIdx = Math.floor((index - 1) / 2);
    if (parentIdx >= 0 && this.heap[parentIdx] > this.heap[index]) {
      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];
      this.heapifyUp(parentIdx);
    }
  }
  heapifyDown(index) {
    const len = this.heap.length;
    let smallest = index;
    const leftChild = index * 2 + 1;
    const rightChild = index * 2 + 2;

    if (leftChild < len && this.heap[leftChild] < this.heap[smallest]) {
      smallest = leftChild;
    }

    if (rightChild < len && this.heap[rightChild] < this.heap[smallest]) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this.heapifyDown(smallest);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  delete() {
    if (this.heap.length === 0) {
      return null;
    }
    const min = this.heap[0];
    const lastIdx = this.heap.length - 1;
    this.heap[0] = this.heap[lastIdx];
    this.heap.pop();
    this.heapifyDown(0);

    return min;
  }
}

const minHeap = new MinHeap();
const maxHeap = new MaxHeap();

const res = [arr[0]];
maxHeap.insert(arr[0]);

for (let i = 1; i < N; i++) {
  const x = arr[i];
  if (x > maxHeap.heap[0]) {
    minHeap.insert(x);
  } else {
    maxHeap.insert(x);
  }

  if (maxHeap.heap.length > minHeap.heap.length + 1) {
    minHeap.insert(maxHeap.delete());
  } else if (minHeap.heap.length > maxHeap.heap.length) {
    maxHeap.insert(minHeap.delete());
  }
  res.push(maxHeap.heap[0]);
}
console.log(res.join("\n"));

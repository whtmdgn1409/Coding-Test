const [N, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/7662.txt"
  )
  .toString()
  .trim()
  .split("\n");

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
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    const lastIdx = this.heap.length - 1;
    this.heap[0] = this.heap[lastIdx];
    this.heap.pop();
    this.heapifyDown(0);

    return min;
  }
}
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
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    const lastIdx = this.heap.length - 1;
    this.heap[0] = this.heap[lastIdx];
    this.heap.pop();
    this.heapifyDown(0);

    return max;
  }
}

for (let chance = 0; chance < N; chance++) {
  let ctr = [];
  let DCount = 0;
  let ICount = 0;
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();
  let k = arr.shift();
  for (let i = 0; i < k; i++) {
    ctr.push(arr.shift());
  }
  ctr.forEach((el) => {
    const [control, num] = el.split(" ");
    if (control === "I") {
      ICount++;
      minHeap.insert(num);
      maxHeap.insert(num);
    } else if (control === "D") {
      DCount++;
      if (minHeap.heap.length === 0 || maxHeap.heap.length === 0) return;
      else {
        if (num === 1) {
          minHeap.delete();
        } else {
          maxHeap.delete();
        }
      }
    }
  });
  let res = [];
  if (ICount > DCount) {
    res.push(maxHeap.heap[0]);
    res.push(minHeap.heap[0]);
  } else {
    res.push("EMPTY");
  }
  console.log(res.join(" "));
}

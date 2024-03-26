const [N, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/11286.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class AbsMinHeap {
  constructor() {
    this.heap = [];
  }
  heapifyUp(index) {
    const parentIdx = Math.floor((index - 1) / 2);
    if (
      parentIdx >= 0 &&
      this.compare(this.heap[parentIdx], this.heap[index]) > 0
    ) {
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

    if (
      leftChild < len &&
      this.compare(this.heap[leftChild], this.heap[smallest]) < 0
    ) {
      smallest = leftChild;
    }

    if (
      rightChild < len &&
      this.compare(this.heap[rightChild], this.heap[smallest]) < 0
    ) {
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
      return 0;
    }
    const min = this.heap[0];
    const lastIdx = this.heap.length - 1;
    this.heap[0] = this.heap[lastIdx];
    this.heap.pop();
    this.heapifyDown(0);

    return min;
  }
  compare(a, b) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    if (absA === absB) {
      return a - b;
    }
    return absA - absB;
  }
}

const absMinHeap = new AbsMinHeap();
let res = [];
for (let i = 0; i < N; i++) {
  const x = arr[i];

  if (x !== 0) {
    absMinHeap.insert(x);
  } else {
    res.push(absMinHeap.delete());
  }
}
console.log(res.join("\n"));

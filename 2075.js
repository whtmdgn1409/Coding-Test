const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2075.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const arr = input.map((el) => el.split(" ").map(Number));

class Heap {
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
    const len = this.heap.length - 1;
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let smallest = index;
    if (left < len && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < len && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (index !== smallest) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapifyDown(smallest);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();

    const answer = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return answer;
  }
}
let answer = 0;
const minHeap = new Heap();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    minHeap.insert(arr[i][j]);
    if (minHeap.heap.length > N) {
      answer = minHeap.extractMin();
    }
  }
}
console.log(answer);

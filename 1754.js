const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1753.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [V, E] = input.shift().split(" ").map(Number);
const start = Number(input.shift());
const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 0; i < E; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  graph[u].push({ node: v, weight: w });
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    [this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.parent(index).distance > this.heap[index].distance
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index).distance < this.leftChild(index).distance
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index].distance < this.heap[smallerChildIndex].distance) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

const dijkstra = (start) => {
  const distances = Array(V + 1).fill(Infinity);
  distances[start] = 0;
  const priorityQueue = new MinHeap();
  priorityQueue.add({ node: start, distance: 0 });

  while (priorityQueue.heap.length > 0) {
    const { node: currentNode, distance: currentDistance } =
      priorityQueue.poll();

    if (currentDistance > distances[currentNode]) continue;

    for (const neighbor of graph[currentNode]) {
      const distance = currentDistance + neighbor.weight;

      if (distance < distances[neighbor.node]) {
        distances[neighbor.node] = distance;
        priorityQueue.add({ node: neighbor.node, distance });
      }
    }
  }

  return distances;
};

const distances = dijkstra(start);

for (let i = 1; i <= V; i++) {
  if (distances[i] === Infinity) {
    console.log("INF");
  } else {
    console.log(distances[i]);
  }
}

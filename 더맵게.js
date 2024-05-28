class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
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
  push(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  pop() {
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



function solution(scoville, K) {
    let heap = new MinHeap()
    let count = 0
    for(const sco of scoville){
        heap.push(sco)
    }
    while(heap.size() >= 2 && heap.peek() < K){
        let first = heap.pop()
        let second = heap.pop()
        heap.push(first + (second * 2))
        count++
    }
    
    return heap.peek() >= K ? count : -1
}

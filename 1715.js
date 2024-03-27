const [N, ...arr] = require("fs").readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/1715.txt').toString().trim().split("\n").map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }
  heapifyUp(index){
    const parentIdx = Math.floor((index - 1) / 2 )
    if(parentIdx >= 0 && this.heap[parentIdx] > this.heap[index]){
      [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]]
      this.heapifyUp(parentIdx)
    }
  }
  heapifyDown(index){
    const len = this.heap.length
    let smallest = index
    const leftChild = index * 2 + 1
    const rightChild = index * 2 + 2
    if(leftChild < len & this.heap[leftChild] < this.heap[smallest]){
      smallest = leftChild
    }
    if(rightChild < len && this.heap[rightChild] < this.heap[smallest]){
      smallest = rightChild
    }
    if(smallest !== index){
      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
      this.heapifyDown(smallest)
    }
  }
  insert(value){
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }
  delete(){
    if(this.heap.length === 1){
      return this.heap.pop()
    }
    const min = this.heap[0]
    const lastIdx = this.heap.length - 1
    this.heap[0] = this.heap[lastIdx]
    this.heap.pop()
    this.heapifyDown(0)

    return min
  }
}

const minHeap = new MinHeap()
for(let i = 0; i < N; i++){
  minHeap.insert(arr[i])
}

let total = 0;
while(minHeap.heap.length > 1){
  let aC = minHeap.delete()
  let bC = minHeap.delete()
  total += (aC + bC)
  minHeap.insert(aC + bC)
}
console.log(total)

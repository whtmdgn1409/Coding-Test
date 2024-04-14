import heapq

class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        heapq.heappush(self.heap, -value)  # heapq는 최소 힙을 지원하므로 음수로 저장하여 최대 힙으로 활용

    def extractMax(self):
        if not self.heap:
            raise IndexError("Heap is empty")
        return -heapq.heappop(self.heap)  # 저장된 값을 음수로 사용했으므로 다시 양수로 변환하여 반환

if __name__ == "__main__":
    N = int(input())
    
    arr = []
    for _ in range(N):
        row = list(map(int, input().split()))
        arr.append(row)
    
    maxHeap = MaxHeap()
    for i in range(N):
        for j in range(N):
            maxHeap.insert(arr[i][j])
    
    for i in range(N):
        if i == N - 1:
            print(maxHeap.extractMax())
        else:
            maxHeap.extractMax()

from collections import deque
import sys
input = sys.stdin.readline


def bfs():
    q = deque()
    q.append((home_x, home_y))
    while q:
        x, y = q.popleft()
        if abs(x - fest_x) + abs(y - fest_y) <= 1000:
            print("happy")
            return
        for i in range(n):
            if not visited[i]:
                new_x, new_y = conv[i]
                if abs(x - new_x) + abs(y - new_y) <= 1000:
                    q.append((new_x, new_y))
                    visited[i] = 1
    print("sad")
    return


t = int(input())
for i in range(t):
    n = int(input())
    home_x, home_y = map(int, input().split())
    conv = []
    for j in range(n):
        x, y = map(int, input().split())
        conv.append((x, y))
    fest_x, fest_y = map(int, input().split())
    visited = [0 for i in range(n+1)]
    bfs()

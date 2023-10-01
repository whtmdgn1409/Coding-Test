from collections import deque
import sys
input = sys.stdin.readline


def bfs(start):
    q = deque([start])
    cnt = 0
    visited = [0] * (N+1)
    visited[start] = 1
    while q:
        now = q.popleft()
        cnt += 1

        for i in computers[now]:
            if not visited[i]:
                q.append(i)
                visited[i] = 1
    return cnt


N, M = map(int, input().split())
computers = [[] for _ in range(N+1)]

for _ in range(M):
    a, b = map(int, input().split())
    computers[b].append(a)

ans = [0 for _ in range(N+1)]
for i in range(1, N+1):
    ans[i] = bfs(i)

for i in range(1, N+1):
    if ans[i] == max(ans):
        print(i, end=" ")

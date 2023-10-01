from collections import deque
import sys
input = sys.stdin.readline


def bfs(graph, start):
    q = deque([start])
    num = [0] * (n+1)
    visited[start] = 1
    while q:
        now = q.popleft()
        for next in graph[now]:
            if visited[next] == 0:
                num[next] = num[now] + 1
                q.append(next)
                visited[next] = 1
    return sum(num)


n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

res = []
for i in range(1, n+1):
    visited = [0 for _ in range(n+1)]
    res.append(bfs(graph, i))

print(res.index(min(res)) + 1)

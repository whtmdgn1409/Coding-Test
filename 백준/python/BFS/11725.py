from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

graph = [[] for _ in range(n+1)]
for _ in range(n-1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

q = deque([1])
ans = [[0] * (n+1)]

while q:
    now = q.popleft()
    for next in graph[now]:
        if ans[next] == 0:
            ans[next] = now
            q.append(next)

res = ans[2:]
for x in res:
    print(x)

from collections import deque
import sys
input = sys.stdin.readline


def bfs(i, j):
    q = deque([(i, j)])
    cnt = 0

    while q:
        x, y = q.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny] and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                q.append((nx, ny))
                cnt += 1
    res.append(cnt)


res = []
n = int(input())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().rstrip())))
visited = [[False for _ in range(n)] for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(n):
    for j in range(n):
        if not visited[i][j] and graph[i][j] == 1:
            bfs(i, j)

res.sort()

print(len(res))
for i in res:
    print(i)

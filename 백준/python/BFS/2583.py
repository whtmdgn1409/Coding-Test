from collections import deque
import sys
input = sys.stdin.readline


def draw_board(x0, y0, x1, y1, k):
    for i in range(x0, x1):
        for j in range(y0, y1):
            board[j][i] = k


def bfs(i, j):
    q = deque([(i, j)])
    cnt = 1

    while q:
        x, y = q.popleft()
        visited[x][y] = True

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < m and 0 <= ny < n and not visited[nx][ny] and board[nx][ny] == 0:
                cnt += 1
                visited[nx][ny] = True
                q.append((nx, ny))
    return cnt


m, n, k = map(int, input().split())

board = [[0 for _ in range(n)] for _ in range(m)]
visited = [[False for _ in range(n)] for _ in range(m)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

res = []
for i in range(1, k+1):
    x0, y0, x1, y1 = map(int, input().split())
    draw_board(x0, y0, x1, y1, i)

for i in range(m):
    for j in range(n):
        if not visited[i][j] and board[i][j] == 0:
            res.append(bfs(i, j))

# print(board)
print(len(res))
res.sort()
for i in res:
    print(i, end=" ")

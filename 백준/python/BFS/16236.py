from collections import deque
import sys
input = sys.stdin.readline

N = int(input())

map = [list(map(int, input().split())) for _ in range(N)]

visited = [[0 for _ in range(i)] for i in range(2, 7)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
fish = 2
time = 0


def bfs(x, y):
    map[x][y] = 0
    q = deque([(x, y)])
    global time
    global fish
    while q:
        x, y = q.popleft()

        for i in range(4):
            nx = dx[i] + x
            ny = dy[i] + y

            if (0 <= nx < N and 0 <= ny < N):
                if 0 < map[nx][ny] < fish:
                    for i in range(fish):
                        if visited[i] != fish:
                            visited[i] = fish
                        else:
                            fish += 1
                    map[nx][ny] = 0
                    time += 1
                    q.append((nx, ny))
                elif map[nx][ny] == 0:
                    time += 1
                    q.append((nx, ny))


for i in range(N):
    for j in range(N):
        if map[i][j] == 9:
            bfs(i, j)

if time == 0:
    print(0)

else:
    print(time)

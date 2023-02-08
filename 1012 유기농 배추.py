import sys
sys.setrecursionlimit(10**6)
s = []
T = int(input())

for _ in range(T):
    M, N, K = map(int,input().split())
    graph = [[0]*(M+1) for _ in range(N+1)]
    for i in range(K):
        a, b = map(int, input().split())
        graph[b][a] = 1
    cnt = 0

    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]


    def dfs(x, y):
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if nx >= 0 and ny >= 0 and nx < N and ny < M and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                dfs(nx, ny)

    for i in range(N):
        for j in range(M):
            if graph[i][j] == 1:
                cnt += 1
                graph[i][j] = 0
                dfs(i, j)
    s.append(cnt)

for num in s:
    print(num)

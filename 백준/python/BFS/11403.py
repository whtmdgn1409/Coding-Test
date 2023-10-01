# bfs로 푸는 법
from collections import deque
import sys
input = sys.stdin.readline

# N = int(input())
# graph = [list(map(int, input().split())) for _ in range(N)]
# visited = [[0]*N for _ in range(N)]


# def bfs(x):
#     q = deque([x])

#     check = [0 for _ in range(N)]
#     while q:
#         now = q.popleft()
#         for i in range(N):
#             if check[i] == 0 and graph[now][i] == 1:
#                 q.append(i)
#                 check[i] = 1
#                 visited[x][i] = 1


# for i in range(0, N):
#     bfs(i)
# for i in visited:
#     print(*i)


# 플로이드-워셜 알고리즘
N = int(input())
graph = [list(map(int, input().split())) for _ in range(N)]

for k in range(N):
    for i in range(N):
        for j in range(N):
            # i에서 j로 가는 길이 있거나 i에서 k를 거쳐 j로 가는 길이 있는 경우엔 i -> j 경로는 1이 된다
            if graph[i][j] == 1 or (graph[i][k] == 1 and graph[k][j] == 1):
                graph[i][j] = 1

for row in graph:
    for col in row:
        print(col, end=" ")
    print()

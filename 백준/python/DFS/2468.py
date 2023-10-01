import sys
sys.setrecursionlimit(100000)

n = int(sys.stdin.readline())

# dfs로 풀 경우 무한 재귀가 발생해 오버플로우가 발생하는 것을
# 방지하기 위해 sys.setrecursionlimit(100000)를 추가한다.

data = []
maxNum = 0
for i in range(n):
    data.append(list(map(int, input().split())))
    for j in range(n):
        if data[i][j] > maxNum:
            maxNum = data[i][j]
# 배열을 입력받음과 동시에 최댓값을 찾는다

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]
res = 1


def dfs(i, j, k):
    for l in range(4):
        nx = i + dx[l]
        ny = j + dy[l]

        if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny] and data[nx][ny] > k:
            visited[nx][ny] = True
            dfs(nx, ny, k)
# 조건에 맞춰 dfs 탐색을 돌린다


for k in range(1, maxNum):
    visited = [[False] * n for _ in range(n)]
    safe = 0
    for i in range(n):
        for j in range(n):
            if data[i][j] > k and visited[i][j] == False:
                visited[i][j] = True
                safe += 1
                dfs(i, j, k)
    res = max(res, safe)
# 한번 for문을 돌 때마다 visited 그래프 초기화
# 기준값보다 배열값이 크고 방문한 적이 없다면 체크한 뒤 dfs 실행
# safe값이 res값보다 크면 갱신
print(res)

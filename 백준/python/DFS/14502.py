n, m = map(int, input().split())

data = []
temp = [[0] * m for _ in range(n)]

for i in range(n):
    data.append(list(map(int, input().split())))

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

res = 0

def virus(x, y):
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
 
        if nx >= 0 and nx < n and ny >= 0 and ny < m:
            if temp[nx][ny] == 0:
                temp[nx][ny] = 2
                virus(nx, ny)

def safe_zone():
    safe = 0
    for i in range(n):
        for j in range(m):
            if temp[i][j] == 0:
                safe += 1
    return safe

def dfs(count):
    global res

    if count == 3:
        for i in range(n):
            for j in range(m):
                temp[i][j] = data[i][j]
        
        for i in range(n):
            for j in range(m):
                if data[i][j] == 2:
                    virus(i, j)
        res = max(res, safe_zone())
        return
    
    for i in range(n):
        for j in range(m):
            if data[i][j] == 0:
                data[i][j] = 1
                count += 1
                dfs(count)
                data[i][j] = 0
                count -= 1

dfs(0)
print(res)
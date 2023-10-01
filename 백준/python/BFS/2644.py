# 2644 촌수계산 실버 2
from collections import deque
n = int(input())
a, b = map(int, input().split())
m = int(input())

family = [[] for _ in range(n+1)]
for _ in range(m):
    i, j = map(int, input().split())
    family[i].append(j)
    family[j].append(i)

q = deque([a])
ans = [0] * (n+1)
check = False

while q:
    now = q.popleft()
    for next in family[now]:
        if ans[next] == 0:
            ans[next] = ans[now] + 1
            q.append(next)


if ans[b] > 0:
    print(ans[b])
else:
    print(-1)

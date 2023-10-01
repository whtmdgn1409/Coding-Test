from collections import deque
N, M, K, X = map(int, input().split())

city = [[] for _ in range(N+1)]

for _ in range(M):
    a, b = map(int, input().split())
    city[a].append(b)

distance = [-1] * (N+1)
distance[X] = 0

q = deque([X])

while q:
    now = q.popleft()
    for next_node in city[now]:
        if distance[next_node] == -1:
            distance[next_node] = distance[now] + 1
            q.append(next_node)

check = False

for i in range(1, N+1):
    if distance[i] == K:
        print(i)
        check = True

if not check:
    print(-1)

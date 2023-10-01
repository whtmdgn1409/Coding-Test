from itertools import combinations
import sys
input = sys.stdin.readline

N = int(input())
graph = [list(map(int, input().split())) for _ in range(N)]
members = [i for i in range(N)]
minimum = 1e9

for r1 in combinations(members, N//2):
  start, link = 0 ,0
  r2 = list(set(members) - set(r1))

  for r in combinations(r1, 2):
    start += (graph[r[0]][r[1]] + graph[r[1]][r[0]])
  for r in combinations(r2, 2):
    link += (graph[r[0]][r[1]] + graph[r[1]][r[0]])
  
  minimum = min(minimum, abs(start - link))

print(minimum)
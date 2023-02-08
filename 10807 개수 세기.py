import sys
N = int(input())
cnt = 0
num = list(map(int, sys.stdin.readline().split()))
FN = int(input())
for i in range(N):
    if num[i] == FN:
        cnt += 1

print(cnt)

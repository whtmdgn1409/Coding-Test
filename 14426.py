import sys
input = sys.stdin.readline

N, M = map(int, input().split(" "))

S = [input().strip() for _ in range(N)]
Chk = [input().strip() for _ in range(M)]

S.sort()
Chk.sort()

cnt = 0

i = 0
j = 0
while i < N and j < M:
  if S[i][:len(Chk[j])] == Chk[j]:
    cnt += 1
    j += 1
    continue
  elif S[i] > Chk[j]:
    j += 1
    continue
  elif S[i] < Chk[j]:
    i += 1
    continue
print(cnt)

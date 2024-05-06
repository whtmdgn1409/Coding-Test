N = int(input())

def Change(n):
  r = list(str(n))
  # print(r)
  cnt = 0
  for x in r:
    if int(x) % 3 == 0:
      if int(x) != 0:
        cnt += 1
  res = ""
  for _ in range(cnt):
    res += "-"
  if cnt == 0:
    res = n
  return res
for i in range(1, N+1):
  print(Change(i), end=" ")

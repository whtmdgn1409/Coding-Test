a, b = map(str, input().split(' '))

cnt = 0

if len(a) != len(b):
  print(0)
else:
  for i in range(len(a)):
    if a[i] == b[i]:
      if a[i] == "8":
        cnt += 1
    else:
      break
  print(cnt)

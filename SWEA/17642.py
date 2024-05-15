T = int(input())
for i in range(1, T+1):
  a, b = map(int, input().split())
  num = b-a
  if num == 0:
    cnt = 0
  elif num <= 1:
    cnt = -1
  elif num % 2 ==0:
    cnt = num // 2
  else:
    cnt = (num -3) // 2 + 1

  print("#{} {}".format(i, cnt))

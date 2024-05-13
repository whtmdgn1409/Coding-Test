T = int(input())
for i in range(1, T+1):
  a, b, c = map(int, input().split())

  res = 0.0
  if 2*b > a+c:
    res = ((2*b) - (a+c)) / 2
  elif 2*b < a+c:
    res = ((a+c) - (2*b)) / 2
  print("#{} {}".format(i, res))

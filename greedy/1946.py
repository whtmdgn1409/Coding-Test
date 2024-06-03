T = int(input())

for _ in range(T):
  num = int(input())
  arr = [list(map(int, input().split())) for _ in range(num)]
  cnt = 1
  arr.sort()
  max_arr = arr[0][1]
  for i in range(1, num):
    if arr[i][1] < max_arr:
      cnt += 1
      max_arr = arr[i][1]

  print(cnt)

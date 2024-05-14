T = int(input())
for i in range(1, T+1):
  arr = list(map(int, input().split()))

  ans = 0
  while arr[1] >= arr[2]:
    arr[1] -= 1
    ans += 1
  while arr[0] >= arr[1]:
    arr[0] -=1
    ans +=1
  if arr[0] == 0 or arr[1] == 0 or arr[2] == 0:
    print("#{} {}".format(i, -1))
  else:
    print("#{} {}".format(i, ans))

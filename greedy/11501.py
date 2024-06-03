T = int(input())

for _ in range(T):
  num = int(input())
  price = list(map(int, input().split()))

  money = 0
  max_money = 0
  for i in range(len(price)-1, -1 ,-1):
    if price[i] > max_money:
      max_money = price[i]
    else:
      money += max_money - price[i]

  print(money)

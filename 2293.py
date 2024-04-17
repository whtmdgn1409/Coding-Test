import sys
input = sys.stdin.readline

n, k = map(int, input().split())
coin_list = []
for i in range(n):
  coin_list.append(int(input()))

dp = [0]*100001
dp[0] = 1
for coin in coin_list:
  for i in range(coin, k+1):
    dp[i] += dp[i-coin]

print(dp[k])

T = int(input())
for _ in range(T):
  num = int(input())
  tree = list(map(int, input().split()))
  tree.sort()

  max_diff = 0
  for i in range(2, num):
    if max_diff < abs(tree[i] - tree[i - 2]):
      max_diff = max(max_diff, abs(tree[i] - tree[i - 2]))
  print(max_diff)

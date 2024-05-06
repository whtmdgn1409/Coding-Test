def Palindrome_test(s):
  if s == s[::-1]:
    return 1
  else: return 0

T = int(input())
for t in range(1, T+1):
  st = input()
  is_pal_dict = {1:"YES", 0:"NO"}
  is_pal = 0

  if Palindrome_test(st):
    if Palindrome_test(st[0:(len(st)-1)//2]):
      if Palindrome_test (st[(len(st)+1)//2:]):
        is_pal = 1

  print(f"#{t} {is_pal_dict[is_pal]}")

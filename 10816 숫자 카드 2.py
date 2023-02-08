N = int(input())
cards = map(int, input().split())
answer = []
M = int(input())
comp = map(int, input().split())

hash = {}
for n in cards:
    if n in hash:
        hash[n] += 1
    else:
        hash[n] = 1

print(' '.join(str(hash[m]) if m in hash else '0' for m in comp))

N = int(input())
cards = list(map(int, input().split()))
M = int(input())
comp = list(map(int, input().split()))

hash = {}

for n in cards:
    if n in hash:
        hash[n] += 1
    else:
        hash[n] = 1

#print(' '.join(str(hash[m]) if m in hash else '0' for m in comp))
for m in comp:
    if m in hash:
        print(hash[m],end=" ")
    else:
        print(0,end=" ")

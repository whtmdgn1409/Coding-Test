import math
T = int(input())

for _ in range(T):
    h, w, n = map(int, input().split())
    num = n // h + 1
    floor = n % h
    if n % h == 0:  # h의 배수이면,
        num = n // h
        floor = h
    print(f'{floor * 100 + num}')

N, r, c = map(int, input().split())

answer = 0

while N != 0:
    N -= 1
    size = 2 ** N
    
    # 1사분면
    if r < size and c < size:
        answer += (size) * (size) * 0
        
    # 2사분면
    elif r < size and c >= size:
        answer += (size) * (size) * 1
        c -= size
        
    # 3사분면
    elif r >= size and c < size:
        answer += (size) * (size) * 2
        r -= size
        
    # 4사분면    
    else:
        answer += (size) * (size) * 3
        r -= size
        c -= size

print(answer)

def hansu(N):
    cnt = 0
    for i in range(1, N+1):
        list_i = list(map(int,str(i)))
        if i < 100:
            cnt += 1
        elif list_i[0]-list_i[1] == list_i[1]-list_i[2]:
            cnt += 1
    return cnt

print(hansu(int(input())))

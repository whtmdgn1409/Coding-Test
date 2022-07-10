def solution(n, lost, reserve):
    trimlost = [i for i in lost if i not in reserve]
    trimreserve = [i for i in reserve if i not in lost]
    trimlost.sort()
    trimreserve.sort()
    cnt = 0
    for i in trimlost:
        if i-1 in trimreserve:
            cnt += 1
            trimreserve.remove(i-1)
        elif i+1 in trimreserve:
            cnt += 1
            trimreserve.remove(i+1)
    return n - len(trimlost) + cnt
def solution(lottos, win_nums):
    bestResult = 7
    wosrtResult = 7

    for i in lottos:
        if(i not in win_nums) and (i == 0):
            bestResult -= 1
        elif (i != 0) and (i in win_nums):
            bestResult -= 1
            wosrtResult -=1

    if bestResult > 6:
        bestResult = 6
    if wosrtResult > 6:
        wosrtResult = 6

    answer = [bestResult, wosrtResult]

    return answer
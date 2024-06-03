import sys
input = sys.stdin.readline
s = input().strip()
array0 = []
array1 = []
string = ""

def solution(min_num, max_num, array):
    global string
    for i in range(len(s)):
        if s[i] == min_num:
            string += s[i]
            if (i + 1 < len(s) and s[i + 1] == max_num) or i + 1 == len(s):
                array.append(string)
                string = ""

solution("0", "1", array0)
solution("1", "0", array1)

print(min(len(array0), len(array1)))

def solution(s):
    dict = {}
    en = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for i in range(10):
        dict[en[i]] = i
    print(dict)
    result = ''
    word = ''
    for i in s:
        if i.isdigit():
            result += i
        elif i.isalpha():
            word += i
            if word in dict.keys():
                result += str(dict[word])
                word = ''
    return int(result)
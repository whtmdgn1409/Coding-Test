sum = 0
while True:
    yoonsungMoney = int(input())
    if(yoonsungMoney != -1):
        sum += yoonsungMoney
    elif(yoonsungMoney == -1):
        break;
print(sum)
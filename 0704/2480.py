a,b,c = input().split()
a = int(a)
b = int(b)
c = int(c)

if(a==b and b==c):
    print(a*1000 + 10000)
elif(a==b or a==c):
    print(a*100+1000)
elif(b==c):
    print(b*100+1000)
else:
    if(a>b):
        if(b>c):
            print(a*100)
        elif(b<c):
            if(a>c):
                print(a*100)
            elif(a<c):
                print(c*100)
    else:
        print(b*100)
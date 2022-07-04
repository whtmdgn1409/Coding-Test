H, M = input().split()
H = int(H)
M = int(M)

if(M<45):
    H -= 1
    M += 15
    if(H<0):
        H = 23
    print(H, M)
elif(M>=45):
    M -= 45
    print(H, M)
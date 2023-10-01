N, M = map(int, input().split())

board = [list(input()) for _ in range(N)]
res = []
for i in range(N-7):
  for j in range(M-7):
    draw1 = 0
    draw2 = 0

    for a in range(i, i+8):
      for b in range(j, j+8):
        if (a+b) % 2 == 0:
          if board[a][b] != 'B':
            draw1 += 1
          else:
            draw2 += 1
        else:
          if board[a][b] != 'W':
            draw1 += 1
          else:
            draw2 += 1
    res.append(draw1)
    res.append(draw2)
    
print(min(res))

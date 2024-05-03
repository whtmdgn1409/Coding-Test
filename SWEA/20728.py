T = int(input())
for case in range(T):
  res = 1000000000
  N, K = map(int, input().split())
  candy = list(map(int, input().split()))
  candy.sort()
  for i in range(N - K + 1):
    maxCandy = candy[i + K - 1]
    minCandy = candy[i]
    diff = maxCandy - minCandy
    res = min(res, diff)
  print("#{} {}".format(case+1, res))

기존엔 res를 리스트로 만들어서 diff를 모두 저장한 다음, res의 최솟값을 출력했는데 이건 메모리 초과가 남.

그래서 그냥 min함수로 처리함
print 부분이 
#1 1
#2 15
#3 2 
이런 식으로 되있었는데, 앞에 붙는게 그냥 인덱스인줄 알고 무시했다가 저것까지 답에 포함해야하는걸 늦게 알아서 오래 걸림. 출력 정보를 꼭 잘 확인하자

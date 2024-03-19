// const path = __dirname + "/14503.txt";
const path = "/dev/stdin";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const ds = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
]
const [N, M] = input.shift().split(" ").map(Number)
const [r, c, d] = input.shift().split(" ").map(Number)
const board = input.map((v) => v.split(" ").map(Number))
const visited = Array.from(Array(N), () => Array(M).fill(false))

const maxDs = ds.length;
const getPositivePosition = (num) => (num < 0 ? num + maxDs : num);

let cnt = 0;
const q = [[r, c ,d]]
while (q.length > 0) {
  let [x, y, dir] = q.shift()
  //현재 위치가 0이고 방문한 적이 없으면
  if(!board[x][y] && !visited[x][y]){
    cnt++
    visited[x][y] = true
  }
  //4방향 탐색
  for(let k = 0; k < 4; k++){
    //1. 왼쪽으로 방향 전환
    dir = getPositivePosition(--dir)
    const nx = x + ds[dir][0];
    const ny = y + ds[dir][1]
    //돌린 방향 앞쪽이 청소하지 않았고 방문한 적 없으면
    if(!board[nx][ny] && !visited[nx][ny]){
      q.push([nx, ny, dir])
      break;
    }
    //4방향 돌았는데 청소할 곳이 없으면
    if(k === 3){
      //후진하기 위한 방향 설정
      const backDir = getPositivePosition(dir - 2);
      const bx = x + ds[backDir][0]
      const by = y + ds[backDir][1]
      //후진할 수 있으면 가고, 없으면 이대로 종료
      if(!board[bx][by]){
        q.push([bx, by, dir])
        break;
      }
    }
  }
}
console.log(cnt)

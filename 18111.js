// const path = __dirname + "/18111.txt"
const path = "/dev/stdin";

const input = require("fs").readFileSync(path).toString().trim().split("\n")

const [N, M, B] = input.shift().split(" ").map(Number)
const board = input.map((v) => v.split(" ").map(Number))

let minTime = Infinity;
let height = -1;
for(let h = 0; h <= 256; h++){
  let remove = 0;
  let block = 0;
  for(let i = 0; i < N; i++){
    for(let j = 0; j < M; j++){
      let diff = board[i][j] - h
      if(diff < 0) block -= diff;
      else remove += diff
    }
  }
  if(remove + B >= block){
    let time = (remove * 2) + block;
    if(minTime >= time){
      minTime = time
      height = h;
    }
  }
}
console.log(minTime, height)

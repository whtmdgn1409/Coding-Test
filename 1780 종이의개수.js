// const path = __dirname + "/1780.txt"
const path = "/dev/stdin"
const input = require("fs").readFileSync(path).toString().trim().split("\n")

const N = Number(input.shift())
const board = input.map((v) => v.split(" ").map(Number))

let paper = {
  "-1":0,
  "0": 0,
  "1": 0
}
const Recursion = (d, x, y) => {
  let isTrue = true
  let standard = board[x][y]

  for(let i =0; i<d;i++){
    for(let j=0;j<d;j++){
      if(board[x+i][y+j] !== standard) isTrue=false
    }
  }

  if(isTrue) paper[standard] += 1
  else {
    d /= 3
    Recursion(d, x, y)
    Recursion(d, x, y + d)
    Recursion(d, x, y + (d * 2))
    Recursion(d, x + d, y)
    Recursion(d, x + d, y + d)
    Recursion(d, x + d, y + (d * 2))
    Recursion(d, x + (d * 2), y)
    Recursion(d, x + (d * 2), y + d)
    Recursion(d, x + (d * 2), y + (d * 2))
  }
}
Recursion(N, 0, 0)
console.log(paper[-1])
console.log(paper[0])
console.log(paper[1])

const path = __dirname + "/1992.txt"
const input = require("fs").readFileSync(path).toString().trim().split("\n")

const N = Number(input.shift())
const board = input.map((v) => v.split("").map(Number))

let quadTree = []
const Recursion = (d, x, y) => {
  let total = 0

  for(let i = 0; i < d; i++){
    for(let j = 0; j < d; j++){
      total += board[x + i][y + j]
    }
  }
  if(total === 0) quadTree.push(0)
  else if(total === d * d) quadTree.push(1)
  else {
    d /= 2
    quadTree.push("(")
    Recursion(d, x, y)
    Recursion(d, x, y + d)
    Recursion(d, x + d, y)
    Recursion(d, x + d, y + d)
    quadTree.push(")")
  }
}
Recursion(N, 0, 0)
console.log(quadTree.join(""))

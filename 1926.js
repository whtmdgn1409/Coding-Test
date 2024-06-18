const [input, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1926.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.split(" ").map(Number);
const board = arr.map((a) => a.split(" ").map(Number));
const visited = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m + 1 }).fill(false)
);
const ans = [];
const dir = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
];

function bfs(i, j) {
  let queue = [[i, j]];
  visited[i][j] = true;
  let cnt = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dir[k][0];
      let ny = y + dir[k][1];
      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (!visited[nx][ny] && board[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          cnt++;
        }
      }
    }
  }
  return cnt;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1 && visited[i][j] === false) {
      ans.push(bfs(i, j));
    }
  }
}
console.log(ans.length);
if (ans.length > 0) {
  console.log(Math.max(...ans));
} else {
  console.log(0);
}

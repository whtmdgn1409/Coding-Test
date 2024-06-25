const [input, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2178.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.split(" ").map(Number);
const board = arr.map((e) => e.split("").map(Number));
const visited = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }).fill(0)
);
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const bfs = () => {
  const q = [[0, 0]];
  visited[0][0] = 1;
  while (q.length) {
    const [x, y] = q.shift();
    if (x === N - 1 && y === M - 1) {
      return visited[x][y];
    }
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dir[k][0], y + dir[k][1]];
      if (0 <= nx && nx < N && 0 <= ny && ny < M) {
        if (board[nx][ny] === 1 && visited[nx][ny] === 0) {
          q.push([nx, ny]);
          visited[nx][ny] += visited[x][y] + 1;
        }
      }
    }
  }
};

const answer = bfs();
console.log(answer);

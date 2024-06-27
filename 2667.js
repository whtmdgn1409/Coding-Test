const [n, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2667.txt"
  )
  .toString()
  .trim()
  .split("\n");

const map = arr.map((e) => e.split("").map(Number));
const visited = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }).fill(0)
);
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const bfs = (i, j) => {
  const q = [[i, j]];
  visited[i][j] = 1;
  let cnt = 1;
  while (q.length) {
    const [x, y] = q.shift();
    for (let [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];

      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < n &&
        visited[nx][ny] === 0 &&
        map[nx][ny] === 1
      ) {
        visited[nx][ny] = 1;
        q.push([nx, ny]);
        cnt++;
      }
    }
  }
  return cnt;
};
let result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1 && visited[i][j] === 0) {
      result.push(bfs(i, j));
    }
  }
}
result.sort((a, b) => a - b);
console.log(result.length);
result.forEach((e) => console.log(e));

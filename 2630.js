const path = __dirname + "/input.txt";
// const path = "/dev/stdin";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
let [n, ...paper] = input;

paper = paper.map((el) => el.split(" ").map(Number));

let white = 0;
let blue = 0;

function dfs(r, c, n) {
  if (checkPaper(r, c, n)) {
    if (paper[r][c] === 1) blue++;
    else white++;

    return;
  }

  let half = n / 2;

  dfs(r, c, half);
  dfs(r + half, c, half);
  dfs(r, c + half, half);
  dfs(r + half, c + half, half);
}

function checkPaper(r, c, n) {
  const base = paper[r][c];
  for (let i = r; i < r + n; i++) {
    for (let j = c; j < c + n; j++) {
      if (base !== paper[i][j]) return false;
    }
  }
  return true;
}

dfs(0, 0, n);
console.log(`${white}\n${blue}`);

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/5014.txt"
  )
  .toString()
  .trim();

const [F, S, G, U, D] = input.split(" ").map(Number);
const Elevator = Array.from({ length: F + 1 }).fill(0);
const visited = Array.from({ length: F + 1 }).fill(false);
let dir = [U, -D];
let q = [S];
Elevator[S] = 0;
visited[S] = true;
let flag = false;
while (q.length) {
  let now = q.shift();
  if (now === G) {
    flag = true;
  }
  for (let k = 0; k < 2; k++) {
    let next = now + dir[k];
    if (next >= 1 && next <= F && visited[next] === false) {
      q.push(next);
      Elevator[next] += Elevator[now] + 1;
      visited[next] = true;
    }
  }
}
if (flag) {
  console.log(Elevator[G]);
} else {
  console.log("use the stairs");
}

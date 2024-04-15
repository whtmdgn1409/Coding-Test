const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/16401.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ");

const arr = input[1].split(" ").map(Number);
let min = 1;
let max = Math.max(...arr);
arr.sort((a, b) => a - b);

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let cnt = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
  if (cnt >= M) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);

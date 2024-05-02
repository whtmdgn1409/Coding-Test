const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/14627.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [S, C] = input.shift().split(" ").map(Number);

const arr = input.map((el) => Number(el));

let min = 0;
let max = 1000000000;
let res = 0;
while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  if (mid === 0) mid = 1;
  let cnt = 0;
  arr.forEach((el) => {
    cnt += Math.floor(el / mid);
  });
  if (cnt >= C) {
    res = Math.max(res, mid);
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
let ans = arr.reduce((r, v) => r + v, 0) - C * res;
console.log(ans);

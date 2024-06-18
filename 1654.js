const [input, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1654.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [K, N] = input.split(" ");
LAN = arr.map((e) => Number(e));
let min = 1;
let max = Math.max(...LAN);
while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let cnt = 0;
  LAN.forEach((e) => {
    cnt += Math.floor(e / mid);
  });
  if (cnt < N) {
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}
console.log(max);

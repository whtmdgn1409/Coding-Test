const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2792.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((el) => Number(el));

let min = 0;
let max = Math.max(...arr);
let mid,
  answer = Infinity;
while (min <= max) {
  mid = Math.floor((min + max) / 2);
  let res = 0;
  arr.forEach((v) => {
    res += Math.ceil(v / mid);
  });

  if (res <= N) {
    if (mid < answer) {
      answer = mid;
    }
    max = mid - 1;
  } else if (res > N) {
    min = mid + 1;
  }
}

console.log(answer);

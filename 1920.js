const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1920.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Num = input[1].split(" ").map(Number);
const M = Number(input[2]);
const arr = input[3].split(" ").map(Number);

Num.sort((a, b) => a - b);
let ans = [];
for (let i = 0; i < M; i++) {
  let lt = 0;
  let rt = N - 1;
  let isExist = false;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[i] === Num[mid]) {
      isExist = true;
      break;
    } else if (arr[i] > Num[mid]) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  if (isExist) {
    ans.push(1);
  } else {
    ans.push(0);
  }
}
console.log(ans.join("\n"));

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2343.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let min = Math.min(...arr);
let max = arr.reduce((r, v) => r + v, 0);
let ans = Infinity;
while (min <= max) {
  let updateMin = 0;
  let mid = Math.floor((min + max) / 2);
  let temp = mid;
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (temp - arr[i] >= 0) {
      temp -= arr[i];
    } else {
      cnt++;
      temp = mid - arr[i];
      if (temp < 0) {
        updateMin = arr[i];
        break;
      }
    }
  }
  if (updateMin > 0) {
    min = updateMin;
    continue;
  }
  if (temp < mid) cnt++;
  if (cnt <= M) {
    if (ans > mid) {
      ans = mid;
    }
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}
console.log(ans);

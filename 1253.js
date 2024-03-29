const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1253.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);

let cnt = 0;
for (let k = 0; k < N; k++) {
  let find = arr[k];
  let i = 0;
  let j = N - 1;
  while (i < j) {
    if (arr[i] + arr[j] === find) {
      if (i !== k && j !== k) {
        cnt++;
        break;
      } else if (i === k) {
        i++;
      } else if (j === k) {
        j--;
      }
    } else if (arr[i] + arr[j] < find) {
      i++;
    } else {
      j--;
    }
  }
}
console.log(cnt);

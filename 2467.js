const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2467.txt"
  )
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);
let left = 0;
let right = N - 1;
let answer = Math.abs(arr[left] + arr[right]);
let final = [arr[left], arr[right]];
while (left < right) {
  let s_left = arr[left];
  let s_right = arr[right];

  sum = s_left + s_right;

  if (Math.abs(sum) < answer) {
    answer = Math.abs(sum);
    final = [s_left, s_right];
    if (answer === 0) {
      break;
    }
  }
  if (sum > 0) {
    right -= 1;
  } else {
    left += 1;
  }
}
console.log(final[0], final[1]);

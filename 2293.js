const [input, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2293.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [n, k] = input.split(" ").map(Number);
let dp = Array.from({ length: k + 1 }).fill(0);
dp[0] = 1;
arr.forEach((el) => Number(el));
arr.forEach((coin) => {
  for (let i = coin; i < k + 1; i++) {
    dp[i] += dp[i - coin];
  }
});
console.log(dp[k]);

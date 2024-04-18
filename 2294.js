const [input, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2294.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.split(" ").map(Number);

let dp = Array.from({ length: k + 1 }).fill(100001);
dp[0] = 0;

arr.forEach((coin) => {
  for (let i = coin; i < k + 1; i++) {
    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
});
if (dp[k] === 100001) {
  console.log(-1);
} else {
  console.log(dp[k]);
}

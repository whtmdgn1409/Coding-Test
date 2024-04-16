const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/7579.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const resource = [0].concat(input[1].split(" ").map(Number));
const costs = [0].concat(input[2].split(" ").map(Number));

// 총 코스트 계산
const tmpCol = costs.reduce((acc, curr) => acc + curr, 0) + 1;

// 배낭 알고리즘을 위한 이중배열 선언
const knapsack = new Array(N + 1).fill().map(() => new Array(tmpCol).fill(0));


for (let app = 1; app <= N; app++) {
  for (let cost = 0; cost < tmpCol; cost++) {
    if (costs[app] <= cost) {
      knapsack[app][cost] = Math.max(
        resource[app] + knapsack[app - 1][cost - costs[app]],
        knapsack[app - 1][cost]
      );
    } else {
      knapsack[app][cost] = knapsack[app - 1][cost];
    }
  }
}

for (let idx = 0; idx < tmpCol; idx++) {
  if (knapsack[N][idx] >= M) {
    console.log(idx);
    break;
  }
}

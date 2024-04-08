const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2003.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let cnt = 0;
let left = 0;
let right = N - 1;
while (left <= right) {
  let sum = 0;
  for (let j = left; j <= right; j++) {
    if (sum < M) {
      sum += arr[j];
    } else {
      break;
    }
  }
  if (sum === M) {
    cnt++;
    left++;
    right = N - 1;
    continue;
  } else {
    if (left === right) {
      left++;
      right = N - 1;
      continue;
    }
    right--;
  }
}

console.log(cnt);

위는 처음 풀 때의 코드이다. left부터 right까지 전부 더하면서 체크하다보니 시간초과로 통과되지 않았다.
이를 해결하는 아래 코드

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2003.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let cnt = 0;
for (let i = 0; i < N; i++) {
  let sum = arr[i];
  let idx = i;
  while (sum < M && idx < N - 1) {
    idx++;
    sum += arr[idx];
  }
  if (sum === M) {
    cnt++;
  }
}

console.log(cnt);


이 개선된 코드는 left에서 left+1부터 차근차근 하나씩 더해가면서 체크한다.
  그래서 첫 코드보다 시간복잡도가 훨씬 개선될 수 있었다.

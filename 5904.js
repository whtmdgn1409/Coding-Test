const path = __dirname + "/5904.txt";
const input = require("fs").readFileSync(path).toString().trim();
const N = Number(input); // 이미 주어진 입력 값

function findMoo(n, k, length) {
  if (n < 3) {
    return n === 0 ? "m" : "o";
  }

  let prevLength = (length - (k + 3)) / 2;

  if (n < prevLength) {
    return findMoo(n, k - 1, prevLength);
  } else if (n >= prevLength && n < prevLength + k + 3) {
    return n - prevLength === 0 ? "m" : "o";
  } else {
    return findMoo(n - prevLength - (k + 3), k - 1, prevLength);
  }
}

function solve(N) {
  let k = 0,
    length = 3;
  while (length < N) {
    k += 1;
    length = 2 * length + k + 3;
  }
  return findMoo(N - 1, k, length); // N-1을 넘기는 이유는 0-based 인덱싱 때문입니다.
}

console.log(solve(N));

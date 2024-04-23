const [A, B] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/16953.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let cnt = 1;
let queue = [];
let isRight = false;
queue.push(B);
while (queue.length) {
  let now = queue.pop();
  if (now === A) {
    isRight = true;
    console.log(cnt);
    break;
  } else if (now < A) {
    break;
  } else if (now % 10 === 1) {
    now /= 10;
    now = parseInt(now);
    queue.push(now);
    cnt++;
  } else if (now % 2 === 0) {
    now /= 2;
    now = parseInt(now);
    queue.push(now);
    cnt++;
  } else {
    break;
  }
}
if (!isRight) {
  console.log(-1);
}

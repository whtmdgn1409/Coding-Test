const [n, k] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1158.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const Deq = [];
for (let i = 1; i < n + 1; i++) {
  Deq.push(i);
}
const res = [];
let cnt = 1;
while (Deq.length) {
  const item = Deq.shift();
  if (cnt % k === 0) {
    res.push(item);
  } else {
    Deq.push(item);
  }
  cnt++;
}
console.log("<" + res.join(", ") + ">");

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/2776.txt"
  )
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const Note1 = input.shift().split(" ").map(Number);
  const M = Number(input.shift());
  const Note2 = input.shift().split(" ").map(Number);
  Note1.sort((a, b) => a - b);
  let res = [];

  Note2.forEach((num) => {
    let lt = 0;
    let rt = N - 1;
    let isExist = false;
    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      if (num === Note1[mid]) {
        isExist = true;
        break;
      } else if (num > Note1[mid]) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
    if (isExist) {
      res.push(1);
    } else {
      res.push(0);
    }
  });
  console.log(res.join("\n"));
}

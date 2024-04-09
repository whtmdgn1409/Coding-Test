const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1269.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr1 = input.shift().split(" ").map(Number);
const arr2 = input.shift().split(" ").map(Number);

let dict1 = {};
let dict2 = {};
let cnt1 = 0,
  cnt2 = 0;
arr1.forEach((e) => {
  dict1[e] = 0;
});
arr2.forEach((e) => {
  dict2[e] = 0;
});

arr1.forEach((e) => {
  if (dict2[e] !== 0) {
    cnt1++;
  }
});
arr2.forEach((e) => {
  if (dict1[e] !== 0) {
    cnt2++;
  }
});
console.log(cnt1 + cnt2);

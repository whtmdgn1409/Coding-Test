const arr = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1620.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = arr[0].split(" ").map(Number);
const pokeArr = arr.slice(1, N + 1);
const pokeQues = arr.slice(N + 1);

const Pocketmon = {};
pokeArr.forEach((i, idx) => {
  Pocketmon[idx + 1] = i;
  Pocketmon[i] = idx + 1;
});
let answer = "";
pokeQues.forEach((q) => {
  answer += Pocketmon[q] + "\n";
});
console.log(answer);

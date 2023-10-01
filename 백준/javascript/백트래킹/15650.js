let input = require("fs").readFileSync("예제.txt").toString().split(" ");
let N = Number(input[0]);
let M = Number(input[1]);
let answerStr = "";
let s = [];

let dfs = (start) => {
  if (s.length === M) {
    answerStr += `${s.join(" ")}\n`;
    return;
  }

  for (let i = start; i <= N; i++) {
    if (!s.includes(i)) {
      s.push(i);
      dfs(i + 1);
      s.pop();
    }
  }
};
dfs(1);
console.log(answerStr);

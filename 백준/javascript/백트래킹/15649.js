let input = require("fs").readFileSync("예제.txt").toString().split(" ");
let N = Number(input[0]);
let M = Number(input[1]);
let answerStr = "";
let s = [];

let dfs = () => {
  if (s.length === M) {
    answerStr += `${s.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!s.includes(i)) {
      s.push(i);
      dfs();
      s.pop();
    }
  }
};
dfs();

console.log(answerStr);

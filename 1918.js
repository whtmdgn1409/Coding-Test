const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1918.txt"
  )
  .toString()
  .trim()
  .split("\n");

let str = input[0];
let stack = [];
let ans = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] >= "A" && str[i] <= "Z") {
    ans += str[i];
  } else if (str[i] === "(") {
    stack.push(str[i]);
  } else if (str[i] === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      ans += stack.pop();
    }
    stack.pop();
  } else if (str[i] === "+" || str[i] === "-") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      ans += stack.pop();
    }
    stack.push(str[i]);
  } else if (str[i] === "*" || str[i] === "/") {
    while (
      (stack.length && stack[stack.length - 1] === "*") ||
      stack[stack.length - 1] === "/"
    ) {
      ans += stack.pop();
    }
    stack.push(str[i]);
  }
}
while (stack.length) {
  ans += stack.pop();
}
console.log(ans);

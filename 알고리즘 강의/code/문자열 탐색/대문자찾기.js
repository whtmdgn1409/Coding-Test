var http = require("http");

http
  .createServer(function handler(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Node JS");
  })
  .listen(3000);

console.log("노드서버 실행완료");

function solution(s) {
  let cnt = 0;
  let p = s.split("");
  for (let x of p) {
    if (x === x.toUpperCase() && x != " ") {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution("Teacher is My friEnd"));

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1967.txt"
  )
  .toString()
  .trim()
  .split("\n");
const n = input.shift();
const tree = Array.from({ length: n + 1 }, () => new Array());
input.forEach((e) => {
  const [u, v, w] = e.split(" ").map(Number);
  tree[u].push([v, w]);
  tree[v].push([u, w]);
});

tree.sort((a, b) => a[0] - b[0]);

function bfs(s) {
  const check = new Array(n + 1).fill(0);
  const q = [[s, 0]];
  let max = { node: 0, dist: 0 };
  while (q.length) {
    const [node, dist] = q.shift();
    if (check[node]) continue;
    check[node] = 1;
    if (max.dist < dist) max = { node, dist };
    for (let [nextNode, nextDist] of tree[node]) {
      q.push([nextNode, dist + nextDist]);
    }
  }
  return max;
}

console.log(bfs(bfs(1).node).dist);

const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/1504.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, E] = input[0].split(" ").map(Number);
const edges = [];
for (let i = 1; i <= E; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  edges.push([u, v, w]);
}

const [v1, v2] = input[E + 1].split(" ").map(Number);

const INF = 1e9;

// 인접 리스트 만들기
const graph = Array.from({ length: N + 1 }, () => []);

edges.forEach(([u, v, w]) => {
  graph[u].push([v, w]);
  graph[v].push([u, w]);
});

// 다익스트라 알고리즘 함수
function dijkstra(start) {
  const distances = Array(N + 1).fill(INF);
  distances[start] = 0;

  const pq = [];
  pq.push([0, start]); // [거리, 노드]

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [currentDistance, currentNode] = pq.shift();

    if (currentDistance > distances[currentNode]) continue;

    graph[currentNode].forEach(([neighbor, weight]) => {
      const distance = currentDistance + weight;
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        pq.push([distance, neighbor]);
      }
    });
  }

  return distances;
}

// 다익스트라 알고리즘을 세 번 수행합니다.
const distanceFrom1 = dijkstra(1);
const distanceFromV1 = dijkstra(v1);
const distanceFromV2 = dijkstra(v2);
console.log(distanceFrom1, distanceFromV1, distanceFromV2);
// 1 -> v1 -> v2 -> N 경로와 1 -> v2 -> v1 -> N 경로를 계산합니다.
const route1 = distanceFrom1[v1] + distanceFromV1[v2] + distanceFromV2[N];
const route2 = distanceFrom1[v2] + distanceFromV2[v1] + distanceFromV1[N];

const answer = Math.min(route1, route2);

// 경로가 없을 경우
if (answer >= INF) {
  console.log(-1);
} else {
  console.log(answer);
}

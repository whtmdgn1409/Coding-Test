const input = require("fs").readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/1743.txt').toString().trim().split("\n")

const [N, M, K] = input.shift().split(" ").map(Number)
const trash = input.map((el) => el.split(" ").map(Number))
const Hall = Array.from({length: N+1}, () => Array.from({length : M+1}).fill(0))
const visited = Array.from({length: N+1}, () => Array.from({length : M+1}).fill(false))
const dir = [[1, 0], [0, -1], [-1, 0], [0, 1]]
trash.forEach((el) => {
    const [x, y] = el;
    Hall[x-1][y-1] = 1
})
function bfs(i ,j){
    let q = [[i, j]]
    visited[i][j] = true
    let cnt = 1
    while(q.length){
        let [x, y] = q.shift()
        for(let k = 0; k < 4; k++){
            let [dx, dy] = [x + dir[k][0], y + dir[k][1]]
            if(0 <= dx && dx < N && 0 <= dy && dy < M){
                if(visited[dx][dy] === false && Hall[dx][dy] === 1){
                    q.push([dx, dy])
                    visited[dx][dy] = true
                    cnt++
                }
            }
        }
    }
    return cnt
}
let res = 0
for(let i = 0; i < N; i++){
    for(let j = 0; j < M; j++){
        if(Hall[i][j] === 1){
            res= Math.max(res, bfs(i, j))
        }
    }
}
console.log(res)

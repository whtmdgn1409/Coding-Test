function isConnected(str1, str2){
    let count = 0
    let len = str1.length
    for(let i = 0; i < len; i++){
        if(str1[i] !== str2[i]) count++;
    }
    return count === 1 ? true : false
}

function solution(begin, target, words) {
    const visited = { [begin] : 0 }
    const q = [begin]
    while(q.length){
        let now = q.shift()
        
        if(now === target) break;
        
        for(const word of words){
            if(isConnected(now, word) && !visited[word]){
                visited[word] = visited[now] + 1
                q.push(word)
            }
        }
    }
    
    return visited[target] ? visited[target] : 0
}

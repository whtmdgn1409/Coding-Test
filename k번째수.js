function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++){
        let res = array.slice(commands[i][0]-1,commands[i][1])
        res = res.sort((a, b) => a - b)
        answer.push(res[commands[i][2]-1])
    }
    return answer;
}

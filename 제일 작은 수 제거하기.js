function solution(arr) {
    let answer = [];
    let min = Math.min(...arr)
    for(let i of arr){
        if(i !== min) {
            answer.push(i)
        }
    }
    if(answer.length > 0){
        return answer
    } else {
        answer.push(-1)
        return answer
    }
}

function solution(answers) {
    const answer = [];
    const one = [1,2,3,4,5]
    const two = [2,1,2,3,2,4,2,5]
    const three = [3,3,1,1,2,2,4,4,5,5]
    
    let v1 = answers.filter((a, i) => a === one[i%5]).length
    let v2 = answers.filter((a, i) => a === two[i%8]).length
    let v3 = answers.filter((a, i) => a === three[i%10]).length
    
    let max = Math.max(v1, v2, v3)
    
    if(v1 === max) answer.push(1);
    if(v2 === max) answer.push(2);
    if(v3 === max) answer.push(3);
    return answer;
}

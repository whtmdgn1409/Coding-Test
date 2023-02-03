function solution(participant, completion) {
    let answer = '';
    
    let part = participant.sort()
    let comp = completion.sort()
    for(let i = 0; i < completion.length; i++){
        if(part[i] !== comp[i]) return part[i]
    }
    
    return part[participant.length-1];
}

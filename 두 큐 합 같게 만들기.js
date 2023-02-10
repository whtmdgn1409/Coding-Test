function solution(queue1, queue2) {
    let totalArr = [...queue1, ...queue2];
    let maxCount = totalArr.length * 2
    let start = 0
    let end = queue1.length
    
    const sum = (arr) => arr.reduce((a, b) => a + b)
    let totalNum = sum(totalArr.slice(start, end))
    let goalNum = sum(totalArr) / 2
    let count = 0
    
    while(count <= maxCount){
        if(totalNum < goalNum){
            totalNum += totalArr[end]
            end++
        } else if(totalNum > goalNum){
            totalNum -= totalArr[start]
            start++
        } else if(totalNum === goalNum){
            return count
        }
        count++
    }
    return -1
}

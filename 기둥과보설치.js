function solution(n, build_frame) {
    let answer = []
    for(const frame of build_frame){
        const [x, y, type, isInstall] = frame
        if(isInstall){
            buildframe(answer, x, y, type)
        } else {
            deleteframe(answer,x, y, type)
        }
    }
    return answer.sort((a,b) => a[0] === b[0] ? a[1] === b[1] ? a[2] - b[2] : a[1] - b[1] : a[0] - b[0]);
}

function buildframe(answer, x, y, type){
    if(type){
        if(checkPlate(answer, x, y)) answer.push([x, y, type])
    }else{
        if(checkPillar(answer, x, y)) answer.push([x, y, type])
    }
}
function deleteframe(answer, x, y, type){
    const copy = answer.slice()
    const idx = copy.findIndex(([a, b, t]) => a === x && b === y && t === type)
    
    copy.splice(idx, 1)
    
    for(const c of copy){
        const [xP, yP, fr] = c
        
        if(fr){
            if(!checkPlate(copy, xP, yP)) return
        } else {
            if(!checkPillar(copy, xP, yP)) return
        }
    }
    answer.splice(idx, 1)
}
const checkPillar = (ans, x, y) => {
  if(y === 0) return true;
  else if(ans.find(([a, b, fr]) => a===x && b===y-1 && fr === 0)) return true;
  else if(ans.find(([a, b, fr]) => a===x && b===y && fr===1)) return true;
  else if(ans.find(([a, b, fr]) => a===x-1 && b===y && fr===1)) return true;
  return false;
}

const checkPlate = (ans, x, y) => {
  if(ans.find(([a, b, fr]) => a===x && b===y-1 && fr===0)) return true;
  else if(ans.find(([a, b, fr]) => a===x+1 && b===y-1 && fr===0)) return true;
  else if(ans.find(([a, b, fr]) => a===x+1 && b===y && fr===1) &&
          ans.find(([a, b, fr]) => a===x-1 && b===y && fr===1)) return true;
  return false;
}

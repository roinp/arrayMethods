//find
//every
//some
//filter
//map
//foreach

let array = [1,2,3,7,4]

function find(array,calback){
   for(let i = 0; i < array.length; i++){
        if(calback(array[i])){
            return array[i]
        }
    }
}

function every(array,calback){
    let newArr=[];
    for(let i = 0; i < array.length; i++){
        if(calback(array[i])){
            newArr.push(array[i])
        }
    }
    if(newArr.length === array.length){
        return true
    }
        return false
}

function some(array,calback){
    let x = 0;
    for(let i = 0; i < array.length; i++){
        if(calback(array[i])){
            x++
            if(x>0){
                return true
            }
                return false
        }
        
    }
}

function filter(array,calback){
    let newArr=[];
    for(let i = 0; i < array.length; i++){
        if(calback(array[i])){
            newArr.push(array[i])
        }
    }
    return newArr
}

function map(array,calback){
    let newArr=[];
    for(let i = 0; i < array.length; i++){
            newArr.push(calback(array[i]))
    }
    return newArr
}
function forEach(array,calback){
    
    for(let i = 0; i < array.length; i++){
            calback(array[i])
    }
    return newArr
}
function func(el,index){
   return el * el
}
console.log(map(array,func)); 
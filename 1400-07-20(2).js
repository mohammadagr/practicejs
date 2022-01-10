function counterIterate(arr){
    let result={}
    arr.map(item=>{
        if (result[item]) result[item]++
        else result[item]=1
    })
    return result
}

console.log(counterIterate([11,22,1,2,5,2,1,5]))
// تابعی بنویسید که یک آرایه به عنوان ورودی گرفته و تعداد تکرار هر آیتم را به صورت آبجکت برگرداند (از for استفاده نشود).
function counterIterate(arr){
    let result={}
    arr.map(item=>{
        if (result[item]) result[item]++
        else result[item]=1
    })
    return result
}

console.log(counterIterate([11,22,1,2,5,2,1,5]))
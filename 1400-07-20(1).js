//تابعی بنویسید که یک آرایه به عنوان ورودی گرفته، ماکسیمم و مینیمم آرایه را در قالب یک آبجکت برگرداند.

function maxMin(array){
    const sortArr = array.sort((a,b)=>b-a)
    const MaxMin={max: sortArr[0], min: sortArr[array.length - 1]}
    return MaxMin
}

console.log(maxMin([1,2,3,30,10,11]))
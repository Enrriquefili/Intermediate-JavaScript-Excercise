let arr=[true,false,true,false,true,true,true];

function countTrue(iterable){
    let count =0;
    for (let value of iterable ){
        if(value==true){
            count++;
        }
    }
    return count;
}

console.log(countTrue(arr));
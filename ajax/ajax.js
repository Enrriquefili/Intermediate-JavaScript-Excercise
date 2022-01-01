let arr=[true,false,true,false,true,true,true];
// Existen varias formas de contar los true de este objeto iterable.Se puede hacer con "for of" ,con el "for" loop, se puede usar "forEach", con un "map", pero de momento te mando esta solucion


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
// En la proxima te anexo las demas soluciones usando otros metodos.Feliz año nuevo!
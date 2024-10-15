function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function doOperation(a,b,fu){
    return fu(a,b);
}
  
console.log(doOperation(5,6,mult));
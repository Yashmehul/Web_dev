function setTimeoutPromisified(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time);
    })
}

function callback(){
    console.log("The promisified callback has been called")
}
let p=setTimeoutPromisified(10000);
p.then(callback);
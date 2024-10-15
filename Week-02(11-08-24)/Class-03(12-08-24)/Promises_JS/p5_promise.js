function setTimeoutPromisified(ms){
    let p=new Promise(resolve=>setTimeout(resolve,ms));
    return p;
}

function callback(){
    console.log("Waited for 3 seconds");
}

setTimeoutPromisified(3000).then(callback);
let p=setTimeoutPromisified(5000);
console.log(p);


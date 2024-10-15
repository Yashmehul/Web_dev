function readTheFile(resolve){
    setTimeout(resolve,3000);
}
function setTimeoutPromisified(){
    return new Promise(readTheFile);
}
function callback(){
    console.log("The execution of callback has been done");
}
const p=setTimeoutPromisified();
p.then(callback);

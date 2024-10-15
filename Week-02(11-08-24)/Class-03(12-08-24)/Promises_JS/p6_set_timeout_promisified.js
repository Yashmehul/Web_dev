function Waitfor3sec(resolve){
    setTimeout(resolve,3000);
}

function setTimeoutPromisified(){
    return new Promise(Waitfor3sec);
}

function main(){
    console.log("Executed main");
}

setTimeoutPromisified().then(main);
function random(resolve){
    setTimeout(resolve,3000);
}

let p=new Promise(random);

function callback(){
    console.log("Promisified function executes");
}

p.then(callback);
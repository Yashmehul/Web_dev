const fs = require("fs");

function readTheFile(resolve){
    fs.readFile("abc.txt", "utf-8", function(err, data){
        resolve(data);
    })
}

function readFile(){
    return new Promise(readTheFile); 
}

const p = readFile(); 
function callback(content){
    console.log(content);
}

p.then(callback);

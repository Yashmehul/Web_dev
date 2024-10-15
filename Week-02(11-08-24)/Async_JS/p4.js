const fs=require("fs");
function print(err,data){
    if(err){
        console.log("File not found!");n
    }
    console.log(data);
}
fs.readFile("my_read.txt","utf-8",print);
fs.readFile("b.txt","utf-8",print);
console.log("DOne!");
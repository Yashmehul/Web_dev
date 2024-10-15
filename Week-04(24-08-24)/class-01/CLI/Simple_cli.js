const fs=require("fs");
function main(){
    let words=0;
    fs.readFile("a.txt","utf-8",function(err,data){
        if(err){
            console.log("There is some error with the file");
        }
        else{       
         words=data.split(" ").length;
        console.log(words);
        }
    })
}

main();
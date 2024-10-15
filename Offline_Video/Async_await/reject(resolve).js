const fs=require("fs");
function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err){
                reject("The file not found");
            }
            else{
                resolve(data);
            }
        });

    });
}

readFileAsync().then(function(data){
    console.log("The file has been read "+ data);
}).catch(function(err){
    console.log(err);
})
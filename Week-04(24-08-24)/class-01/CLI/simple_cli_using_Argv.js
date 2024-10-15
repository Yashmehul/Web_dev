const { program } = require("commander");
const fs=require("fs");

function main(file){
    fs.readFile(file,"utf-8",(err,data)=>{
        let words=0;
        words=data.split(" ").length;
        console.log("There are "+words+ " words in file "+file);
    })
}
main(process.argv[2]);
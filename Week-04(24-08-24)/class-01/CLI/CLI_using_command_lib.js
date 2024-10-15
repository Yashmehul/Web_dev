const { Command }=require("commander");
const fs=require("fs");

const program=new Command();

program.name("Countet")
    .description("CLI to do file based tasks")
    .version("0.9.0")

program 
    .command("Count_words")
    .description("Count the number of words present in a file")
    .argument('<file_name>','FIle that is read for word count')
    .action((file_name)=>{
        fs.readFile(file_name,"utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                let words=0;
                words=data.split(" ").length;
                console.log("There are "+words+" in the file "+file_name);
            }
        })
    })

    program.parse();
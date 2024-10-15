const { Command }=require("commander")
const fs=require("fs");

const program=new Command();

program.name("File writer")
    .description("CLI used to write in a file")
    .version("0.9.0")

program
    .command("Write")
    .description("USed to write in a file")
    .argument('<file>','File to write to')
    .argument('<content...>','Content to write in a file')
    .action((file,content)=>{
        const text = content.join(" "); 
        fs.writeFile(file,text,'utf-8',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Successfully wirtten in "+file);
            }
        })
    })

    program.parse();
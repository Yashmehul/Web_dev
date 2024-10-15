const { Command } = require("commander");
const fs = require("fs");

const program = new Command();

program
  .name('TODO_CLI')
  .description('TODO_LIST using CLI')
  .version("1.0.0");

// ADD command
program
  .command("ADD")
  .description("Adds a task to the todo list")
  .argument('<file>', 'File name where the task will be appended')
  .argument('<task...>', 'The task that has to be appended')
  .action((file, task) => {
    const new_task = task.join(' '); // Join the variable-length argument into one string
    if (new_task.length === 0) {
      console.log("Nothing to add");
      return;
    }
    fs.appendFile(file, new_task + '\n', 'utf-8', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully added task: " + new_task + " to file: " + file);
      }
    });
  });

// DELETE command
program
  .command("DELETE")
  .description("Deletes a task from the todo list")
  .argument('<file>', 'File name where the task will be deleted')
  .argument('<task...>', 'The task that has to be deleted')
  .action((file, task) => {
    const old_task = task.join(' '); // Join the variable-length argument into one string
    if (old_task.length === 0) {
      console.log("Nothing to delete");
      return;
    }
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading the file", err);
        return;
      }
      if (!data.includes(old_task)) {
        console.log("No such task was found");
        return;
      }
      const updatedData = data.replace(old_task, ''); // Replace the old task with empty string
      fs.writeFile(file, updatedData, "utf-8", (err) => {
        if (err) {
          console.log("Error deleting the task");
        } else {
          console.log(`Successfully deleted task: "${old_task}" from ${file}`);
        }
      });
    });
  });

// UPDATE command
program
  .command("UPDATE")
  .description("Updates a task in the todo list")
  .argument('<file>','File which contains the Tasks of list')
  .argument('<task...>','Specify the old task and new task seperated by a delimmiter(e.g->oldtask-newtask')
  .action((file,task)=>{
    const task_=task.join(" ");
    const[old_task,new_task]=task_.split('-');
    if(!old_task||!new_task){
        console.log("Enter both the old_task and new_task to to updation in the main todo list file");
        return;
    }
    else{
        fs.readFile(file,"utf-8",(err,data)=>{
            if(err){
                console.log("There is error in opening the file",err);
                return;
            }
            else{
                if(!data.includes(old_task)){
                    console.log("The task that you want to udpate is not present in the file ");
                    return;
                }
                else{
                    const updatedData=data.replace(old_task,new_task);
                    fs.writeFile(file, updatedData, (err) => {
                        if (err) {
                          console.log("There is some error in writing the task in the file", err);
                        } else {
                          console.log(`Successfully updated task: "${old_task}" to "${new_task}" in ${file}`);
                        }
                    });
                    
                }
            }
        })
    }
  })
program.parse();

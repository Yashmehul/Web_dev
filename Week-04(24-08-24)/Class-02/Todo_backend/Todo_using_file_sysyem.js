const express = require("express");
const app = express();
const fs = require("fs").promises;

app.use(express.json());

const FILE_PATH = "TODO_FILE.json";

const readTasks = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading tasks:", error);
        return [];
    }
};

const writeTasks = async (tasks) => {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing tasks:", error);
    }
};

app.get("/todo", async (req, res) => {
    try {
        const tasks = await readTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error retrieving tasks:", error);
        res.status(500).json({
            message: "Error retrieving tasks"
        });
    }
});

// Changed from PUT to POST
app.post("/add", async (req, res) => {
    try {
        const { title, priority } = req.body;
        const tasks = await readTasks();
        const id = tasks.length + 1; // Ensure this is the id field
        const newTask = {
            id: id, // Use lowercase 'id'
            title: title || "Untitled Task",
            priority: priority || "Undefined"
        };
        tasks.push(newTask);
        await writeTasks(tasks);
        res.status(200).json({
            message: "The new task has been added successfully",
            task: newTask
        });
    } catch (error) {
        console.error("Error adding the task:", error);
        res.status(500).json({
            message: "Error adding the task"
        });
    }
});

app.put("/update/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { title, priority } = req.body;
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(item => item.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex].title = title || "Untitled Task";
            tasks[taskIndex].priority = priority !== undefined ? priority : tasks[taskIndex].priority;
            await writeTasks(tasks);
            res.status(200).json({
                message: "Task updated successfully",
                task: tasks[taskIndex] // Return the updated task
            });
        } else {
            res.status(404).json({
                message: "Task not found"
            });
        }
    } catch (error) {
        console.error("Error updating the task:", error);
        res.status(500).json({
            message: "Error updating the task"
        });
    }
});

app.delete("/todo/:id",async(req,res)=>{
    try{
    const id=parseInt(req.params.id,10);
    const tasks=await readTasks();   
    const taskindex=tasks.findIndex(item=>item.id===id);
    if(taskindex!==-1){
        const removedTask=tasks.splice(tasks,1)[0];
        await writeTasks(tasks);
        res.status(200).json({
            task:removedTask,
            message:"Above task successfully deleted"
        })

    }else{
        res.status(400).json({
            message:"Task not found"
        })
    }
}
catch(error){
    res.status(500).json({
        message:"Error deleting th e task"
    })
}

})

app.listen(3000, () => {
    console.log("The server is listening on the port 3000 (:");
});


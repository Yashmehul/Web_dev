const express = require("express");
const app = express();

app.use(express.json());
//ye app.use(express.json())-> use hota hai in case u want to do a post request jahan hm body mei 
// data daalte hai kuch jo ki server ko jaaega ....... it's important to descirbe we gonna use json


let TodoList = []; // Array that stores tasks with id,title & Priority

// GET request to display complete Todo list
app.get('/todo', (req,res) => {
    res.send(TodoList);
});

// POST request to add a task to the array
// /add is the endpoint bta rhe incase if /add is the endpoint/route handler and Request type is POST
//uss case mei backend pe koi likhega mtlb post hoga.....
app.post('/add', (req, res) => {
    const { title, priority } = req.body;

    const newId = TodoList.length + 1;

    const newTask = {
        id: newId,
        title: title || "Untitled task",
        priority: priority || "Not mentioned" // Ensure priority has a default value
    };

    TodoList.push(newTask);
    res.status(200).json({
        message: "Task added successfully",
        task: newTask
    });
});

// PUT request to update a task in the todo list based on the ID provided
//Put request is used to update something in the backend.....

app.put('/update/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const { title, priority } = req.body;
    //req.body o

    const taskIndex = TodoList.findIndex(item => item.id === taskId);

    if (taskIndex !== -1) {
        TodoList[taskIndex].title = title || "Untitled task";
        TodoList[taskIndex].priority = priority !== undefined ? priority : TodoList[taskIndex].priority;

        res.status(200).json({
            message: "Task updated successfully",
            task: TodoList[taskIndex]
        });
    } else {
        res.status(404).json({
            message: "Task not found"
        });
    }
});
app.delete('/todo/:id',(req,res)=>{
    const TaskId=parseInt(req.params.id,10);

    const finalpos=TodoList.findIndex(task=>task.id===TaskId);
    if(finalpos!==-1){
        TodoList.splice(finalpos,1);
        res.status(200).json({
            message:"The task has been Sucessfully deleted",
            task:TodoList[finalpos]
        })
    }
    else{
        res.status(404).json({
            message:"The task was not found"
        })
    }
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

const express=require("express");
const app=express();

let errorcount=0;

app.get('/info',(req,res)=>{
    let a;
    a.length;
})

app.post('/user',(req,res)=>{
    res.status(200).send({});
})

// app.use((err,req,res,next)=>{
//     res.status(404).send("Something wrong");
// })

app.listen(3000,()=>{{
    console.log("The server is listening on the port 3000");
}});



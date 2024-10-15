//CORS -> cross origin resource sharing

const express=require("express");
const app=express();
const cors=require("cors")

app.use(cors());
app.use(express.json())
application.get('/',(req,res)=>{
    
})
app.post("/sum",(req,res)=>{
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    res.json({
        answer:a+b
    })
})

app.listen(3000,()=>{
    console.log("The server is listening on port 3000 (:");
})
const express=require("express");
const app= express();
// Backend ko data bhejne kaa multiple tareeka hai..
//1. Using query
//2.Using Params
//3.using Body in post req
//4.Using Headers 
app.get('/sum',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        sum:a+b
    })
})

app.get('/sub',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        sub:a-b
    })

})


app.get('/multiply',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
     res.json({
        multiply:a*b
     })
})

app.get('/div',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        divide:a/b
    })
})


app.listen(3000,()=>{
    console.log("The server is listening on the port 3000 (:")
})
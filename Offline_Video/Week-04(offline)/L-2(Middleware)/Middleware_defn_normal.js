const express=require("express");
const app=express();

app.use(isOldenoughMiddleware);
function isOldenoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next()
    }
    else{
        res.json({
            mssg:"The age is below the required limit"
        })
    }
}

app.get('/ride1',(req,res)=>{
    res.json({
        mssg:"The 1st ride has been successfully ridden"
    })
})

app.get('/ride2',(req,res)=>{
    res.json({
        mssg:"The second ride has been successfully ridden"
    })
})

app.listen(3000,()=>{
    console.log("The server is listening on the port number 3000 (:")
})
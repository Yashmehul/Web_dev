const express=require("express");
const app=express();
function logger(req,res,next){
    console.log("Method is:" +req.method);
    console.log("The url used here is:" +req.protocol +'://' + req.get('host') + req.originalUrl);
    console.log(new Date());
    next();

}
app.use(logger)

app.get('/sum',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    if(isNaN(a)||isNaN(b)){
        res.status(400).json({error:"Invalid argumnets"})
    }
    res.json({
        sum:a+b
    })
})

app.listen(3000,()=>{
    console.log("the server is listening on the port no 3000 (:");
})
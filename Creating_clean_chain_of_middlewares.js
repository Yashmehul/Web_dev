const express=require("express");
const app= express();

let requestCount=0;
function requestIncreaser(req,res,next){
    requestCount++;
    console.log("The total no. of requests:"+requestCount);
    req.requestCount=requestCount;
    req.name="mehul123"
    //yhn dikhae hai ki hm request object mei change laa skte
    // we did req.name="mehul123"...
    next();
}
function realSumHandler(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(isNaN(a)||isNaN(b)){
        res.status(400).json({Error:"Enter vallid paramteres"})
    }
    console.log(req.name);
    res.json({
        sub:a+b
    })
}
app.get('/sum',requestIncreaser,realSumHandler);
//Express is a chain of middlewares and and middleware can stop the 
//execution or processing of an http request
//Middleware can do these tasks:
//1.It can change the request parameter
//2.It can do Authentication
//3. It can stop processing of an HTTP request
//4. It directs us to make logic of exeection /another middlewar


app.get('/sub',requestIncreaser,(req,res)=>{
    const a=req.query.a;
    const b=req.query.b;

    if(isNaN(a)||isNaN(b)){
        res.status(400).json({error:"enter the correct parameters"})
    }
    res.json({
        sub:a-b
    })
})


app.get('/multiply',requestIncreaser,(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(isNaN(a)||isNaN(b)){
        res.status(400).json({Error:"Enter vallid paramteres"})
    }
     res.json({
        multiply:a*b
     })
})

app.get('/div',requestIncreaser,(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(isNaN(a)||isNaN(b)){
        res.status(400).json({Error:"Enter vallid paramteres"})
    }

    res.json({
        divide:a/b
    })
})


app.listen(3000,()=>{
    console.log("The server is listening on the port 3000 (:")
})
const express=require("express");
const app= express();

let requestCount=0;
function requestIncreaser(req,res){
    requestCount++;
    console.log(requestCount);
    req.requestCount=requestCount;
}

app.get('/sum',(req,res)=>{
    requestIncreaser(req,res);
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(isNaN(a)||isNaN(b)){
        res.status(400).json({Error:"Enter vallid paramteres"})
    }

    res.json({
        sum:a+b
    })
})
//Express is a chain of middlewares and and middleware can stop the 
//execution or processing of an http request
//Middleware can do these tasks:
//1.It can change the request parameter
//2.It can do Authentication
//3. It can stop processing of an HTTP request
//4. It directs us to make logic of exeection /another middlewar

app.get('/sub',(req,res)=>{
    requestIncreaser(req,res);
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(isNaN(a)||isNaN(b)){
        res.status(400).json({Error:"Enter vallid paramteres"})
    }

    res.json({
        sub:a-b
    })

})


app.get('/multiply',(req,res)=>{
    requestIncreaser(req,res);
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    if(isNaN(a)||isNaN(b)){
        res.status(400).json({Error:"Enter vallid paramteres"})
    }
     res.json({
        multiply:a*b
     })
})

app.get('/div',(req,res)=>{
    requestIncreaser(req,res);
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
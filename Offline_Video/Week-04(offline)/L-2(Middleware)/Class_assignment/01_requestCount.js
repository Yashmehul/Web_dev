const express=require("express");
const app=express();

let reqcount=0;
app.use((req,res,next)=>{
    reqcount++;
    next();
})

app.get('/user',(req,res)=>{
    res.status(200).json({
        mssg:"mehul"
    })
})
// this keeping of server count is one of the way to keep track of the wellness of server ...checking that how 
//many request our server is getting ...it's not overwhelming....it's necessary in backend...how many people hitting the server

app.post('/user',(req,res)=>{
    res.status(200).json({
        mssg:"dummy user created"
    })
})
// hmlog hrr request mei wo requestcount++ krr skte the prr that violates the dry principle as we are repeating the code
//also it is not advised to use anything more logical inside the requests...better to use middlewares....

app.get("/usercount",(req,res)=>{
    res.json({
        user_count:reqcount
    })
})

app.listen(5000,()=>{
    console.log("The server is listeing on the port no. 5000");
})



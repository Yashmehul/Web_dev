const express=require("express")
const app=express()
//so to process body of request we need to use express.json()-->special middleware to use it...
//another can be to parse thr body would be 
//bodyparse
//const bodyParser=require("body-parser")
//app.use(bodyParser.json())
app.use(express.json());
//if not we nod use these middleware then the body will be undefined so we need to include thiss.....

app.post('/sum',(req,res)=>{
    console.log(req.body);
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);
    if(isNaN(a)||isNaN(b)){
        res.status(400).json({
            err:"Invalid parameters"
        })
    }
    res.json({
        sum:a+b
    })
})

app.listen(3000,()=>{
    console.log("The server is listenig on the port 3000 (:");
})
const express=require("express");
const app=express();

app.use(isOldEnough);
//ye app.use declare krne se bol rhe route handler pe jb hi request aaega tbb tm ye Middle ware use krna..
//similarly in case of Post request hm jo use krte body mei json object toh
//hm likhte hai app.use(express.json())-->mtlb ki ek route handler ko access dete hai req ke body ko..
//hm kisi request ke endpoint ke values bhi access krr skte hai 
//using int var_name=req.query.var_name.. krke bss endpoint mei--> /endpoint?var_name=x; aise use krte hai

function isOldEnough(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    } else{
        res.json({
            msg:"Sorry you are not of age yet",
        })

    }
}
app.get("/ride2",(req,res)=>{
    res.json({
        msg:"You have successfully ridden the ride 2"
    })
})

app.get("/ride1",(req,res)=>{
    res.json({
        msg:"You have successfully ridden the ride 1"
    })
})

app.listen(3000,()=>{
    console.log("The server is listening on the port 300 (:");
})
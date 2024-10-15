const express=require("express");
const app=express();
//function that returns a boolean if the person is more than 14 
function isOldEnough(age){
    if(age>=14){
        return true;
    }
    else{
        return false;
    }
}

app.get("/ride1",function(req,res){
    if(isOldEnough(req.query.age)){
        //so route handler/endpoint mei input bhi daal skte hai ..usko daalne kaa tareeka hai '?'...
        //usko select krte hai req.query.value se..... so for this the GET req is like-> localhost:3000/ride1?age=30
        //aur uss value ko laane k liye we use req.query.age ... nd we will get that value ...
        //usi ko Old enought mei daal ke middlewre jaisa check bna rhe hai hmmmm
        
    res.status(200).json({
        msg:"You have successfully riden the ride 1 "
    })
}
else{
    res.status(411).json({
        message:"You are not of required age"
    })
}
})

app.listen(3000,()=>{
    console.log("Server's listening on port 3000");
});
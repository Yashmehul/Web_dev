const express=require("express")
const app=express()

function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}

app.get('/sum',(req,res)=>{
    const n=req.query.n;
    const ans=sum(n);
    res.send("The sum of the "+n.toString()+" natural numbers are: "+ans.toString());
})

app.listen(3000,()=>{
    console.log("The server is listening on port 3000");
})
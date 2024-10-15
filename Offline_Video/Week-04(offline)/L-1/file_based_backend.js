const express=require("express");
const fs=require("fs");
const app=express();

app.use(express.json());

app.get('/file/file_name',(req,res)=>{
    const file_name=req.params.file_name;
    res.
})
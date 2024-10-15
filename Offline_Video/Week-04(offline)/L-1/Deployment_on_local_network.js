const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello mehul tab mei dekh rhe?")
});

app.listen(3000,()=>console.log("Listening on port 3000"));

//ye particular res on the basis of endpoint localhost ke server pe host/publosh ho gya....mtlb khudke Ip prrr
//aur agrr koi Ip daalega Localhost or 127.0.0.1:specified_port daalega toh ye res.send wala output aaega 
//basically dhyaan do endpoint pe aur wo host khn hua hai uspe .....
//same wifi pe ye publish ho jaaega kyunki hm isko khin Internet p publish nii kiye toh ye aur khin ni milega
//pr Router p publish hone ke krnn ye milega hmko same router connected device p uss IP pe hosted
//Ip address:specified port daalne se mil jaaega

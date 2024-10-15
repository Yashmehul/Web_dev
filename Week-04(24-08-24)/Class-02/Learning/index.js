const express=require("express")
const app=express()

app.get('/',function(req,res){
    res.send("Hello world")
})

// this '/' works as endpoint or a Route Handler  jo ki last mei dikhega port ke baad uske according
//wo backedn mei resolve hokrr output dega 
// the main thing is that it will work and run or send the 
// value that has been defined or has been assigned as per rule

app.get('/bol_De',function(req,res){
    res.send("Nhi bolunga ...meri marziiii");
})
app.post('/',function(req,res){
    res.send("Hello world from the post endpoint");
})
app.listen(3000) //im listening on the port 3000 infinitely and once the request comes on the following endpointi will give access 
//to request and respose object ....
//jaise hei endpoint match hoga wo particular->req,rej ke object kaa access dega jispe hm multiple funcitons call krr skte
//waise res.send krke bhej skte kuch

/*we can send Json /Html
res.json({
name:"mehul"
})*/

//in case of HTML -> res.send(<b> Hello there</b>)

// dekho ye app.listen ek port no-3000 ko active krr de rha wo infinitely run krrha
//jaise hei usko request aaega wo send krega jo defined hai res.send mei ...
//You only have to understand ki app.listen port ko active rkhegaa infinite time ke liye
//Jaise hei usko request aaega wo resond krega ek particular process depending on the Endpoint/Specific Route Handlers
app.get('/jsonwa',function(req,res){
    res.json({
        name:"mehul",
        age:"22"
    })
})

app.get('/boldwa',function(req,res){
    res.send("<b> Mera naam mehul hai </b>");
})
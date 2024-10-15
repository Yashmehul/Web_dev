const express=require("express");
const app=express();

let numberOfRequestForUser={};
setInterval(() => {
    numberOfRequestForUser={};
}, 5000);
//this is the global clock kinda thingused here it Refreshes the reuqest of an user every interval seconds 
//mentioned here.....
app.use((req,res,next)=>{
    const userId=req.headers["user-id"];
    console.log("Request coming from user: "+userId);
    if(numberOfRequestForUser[userId]){
        numberOfRequestForUser[userId]=numberOfRequestForUser[userId]+1;
        console.log(`Request count for ${userId}: ${numberOfRequestForUser[userId]}`);
        if(numberOfRequestForUser[userId]>5){
            console.log(`Too many requests from user-id: ${userId}`);
            res.status(404).send("Not allowed");
        }
        else{
            next();
        }
    }
    else
    {
        numberOfRequestForUser[userId]=1;
        console.log(`First request from user-id: ${userId}`);
        next();
    }
})

app.get('/rate',(req,res)=>{
    res.send("request allowed");
})

app.listen(3000,()=>{
    console.log("The server is listening on the port 3000 (: ");
})

//this basically is a ratelimitter code that helps us to keep track and control the number of requests
//sent to backend for a particular user...
// if one client sends too many requests in a second we try not to handle one client's many request while
//keeping all the servers computation busy if not controlled can lead to several types of attack 
//so what we are doing here is keeping track of the requests by a user ..
//we keep it's track in an array and we store the number of requests by a user in 1 second
//after every 1 second we refresh it and until then in 1 second we check for the number of requests
//in our case we are checking that if requests exists then go ahead and check for number of requests in 1 sec
//else go and make numberOfRequestForUser[user-id]=1..
//in case if request already exist check for if(numberOfRequestForUser[user-id]>5) then send a res.status(404)
//and send a error message
//in case when everything is cool go ahead and do next();sssss


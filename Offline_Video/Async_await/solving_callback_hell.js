// solving the issus of callback hell  using promises only just using return statements instead of using indentation
//isme istemaal kro return statement kaa 
//SetTimeoutpromisiifed cdirecct call krke chain krnee se accha hai ki return kaa use kro
//jyada indentatiton niii aaega naahi koi callback hell

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}

setTimeoutPromisified(1000).then(function(){
    console.log("Hiii");
    return setTimeoutPromisified(3000);
})
.then(function(){
    console.log("Hello");
    return setTimeoutPromisified(5000);
})
.then(function(){
    console.log("Hello there!");
})
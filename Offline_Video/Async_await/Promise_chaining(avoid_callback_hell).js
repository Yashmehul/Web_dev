function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}

// It's still a hell ...hell of then and it does not resolve the issue of the callback hell it can still be reffered as the callback hell
setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("Hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("hello there");
        });

    });
});

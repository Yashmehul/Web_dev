function setTimeoutPromisified(duration){
    return new Promise(resolve=>{
        setTimeout(resolve,duration);
    })
}

async function solve (){
    await setTimeoutPromisified(1000);
    console.log("hii");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hello there");
}
// in await syntax the thread does'nt stop executing 
//async await is just syntactic sugar here it 
//is same as .then under the hood
//so keep that in mind 
//it just makes the code look cleaner
//it is also Async operation only
//bss ghuma firrra ke likha hai ...
solve();
console.log("hello beta ky hall hai")
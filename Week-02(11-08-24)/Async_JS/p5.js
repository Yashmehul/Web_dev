function Timeout(){
    console.log("CLick the button");
}

console.log("Hi");
setTimeout(Timeout,15000);
//set timeout is also  Asynchronous since it is executed parallely and 
//it only does the callback of the Timeout function when  it has
//waited for the given amount of time that is here 15000 milli sec
//that is 15 second 
//so this passing of functions to some functions like readFile
//and setTimeout then it is generally referred to as Callbacks..
console.log("Welcome to loupe");
for(let i=0;i<10;i++){
    console.log(i);
}
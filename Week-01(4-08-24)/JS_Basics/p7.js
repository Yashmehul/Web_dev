function greet(user){
    console.log("Hello"+" "+user.name+" your age "+user.age);
    if(user.age>18){
        console.log("Your are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
}

let user={
    name:"mehul",
    age:22
}

greet(user);

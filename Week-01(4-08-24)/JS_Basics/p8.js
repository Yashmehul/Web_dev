function greet_new(user){
    if(user.gender=="male"){
        console.log("Hi Mr."+user.name+" your age is "+user.age);
    }
    else{
        console.log("Hi Mrs."+user.name+" your age is "+user.age);
    }
}
let user1={
    name:"yash",
    gender:"male",
    age:22
}

let user2={
    name:"eeshika",
    gender:"female",
    age:21
}
greet_new(user1);
greet_new(user2);

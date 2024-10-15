function check(user){
    for(let i=0;i<user.length;i++){
        if(user[i].age>18 &&user[i].gender=="male"){
            console.log(user[i]);
        }
    }
}

let user=[{
    name:"yash",
    age:22,
    gender:"male"
},{
    name:"aaradhya",
    age:21,
    gender:"female"
},{
    name:"mehul",
    age:22,
    gender:"male"
},{
    name:"dhruv",
    age:15,
    gender:"other"
}]

check(user);


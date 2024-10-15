// const rect={
//     width:10,
//     height:15,
//     area:function cal(){
//         console.log(this.width*this.height);
//     }
// };

// rect.area();
//isme toh hm multiple key -value pair wala systummm bna ke 
//methods introduce krr skte objects mei ..

const rect1={
    width:15,
    height:10,
    color:"red"
};

function area(rect){
    console.log(rect.width*rect.height);
}

area(rect1);

//Here mentioned ways are the 2 ways in which we create
//functionality like classes but it doesn't have the 
//concept of Inheritance and many more things ..

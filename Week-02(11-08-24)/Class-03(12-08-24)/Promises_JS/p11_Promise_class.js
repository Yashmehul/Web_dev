class Promise2{
    constructor(fn){
        function afterdone(){
            this.resolve();
        }
        fn(afterdone);
        //Fn readTheFile bnke aaya idhrr aur wo call hua fn(afterdone) mtlb -->readTheFile(afterdone)
        //aur ye afterdone hai resolve hei ... toh jb andrrr resolve  call hua ussese phele .then 
        //hua calll aur .then resolve ko jo function passed hai .then ke parameter mei wo bna diya 
        //end mei jb afterdone jo resolve ho chuka tha wo call hua toh this.resolve () vall ho gya...
    }

    then(callback){
        this.resolve=callback;
    }
}

function readTheFile(resolve){
    setTimeout(resolve,3000);
}

function setTimeoutPromisified(){
    return new Promise2(readTheFile);
}
let p=setTimeoutPromisified();
function callback(){
    console.log("The promised funciton has been called here....");
}
p.then(callback);
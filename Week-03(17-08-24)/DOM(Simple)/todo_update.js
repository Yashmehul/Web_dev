let count=0;
function counter(){
const el=document.querySelectorAll("h3")[1];
    el.innerHTML=count+1;
    count+=1;
}
setInterval(counter,1000);
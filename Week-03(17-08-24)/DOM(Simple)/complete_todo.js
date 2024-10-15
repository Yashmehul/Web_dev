let ctr=4;
function deleteTodo(index){
    const element=document.getElementById("todo-"+index);
    element.parentNode.removeChild(element);
    ctr--;
}
function add_todo(){
   const inputEl=document.getElementById("inp");
   const newdivEl=document.createElement("div");
   newdivEl.setAttribute("id","todo-"+ctr);
   newdivEl.innerHTML="<div>"+'<h4>'+ctr+". "+inputEl.value+'</h4><button onclick="deleteTodo('+ctr+')">Delete</button></div>'
   const parent=document.getElementById('todos');
   parent.append(newdivEl);

   ctr=ctr+1;
   inputEl.value="";

}
function delete_todo(idx){
    const el=document.getElementById("todo"+idx);
    el.parentNode.removeChild(el);
}
container = document.querySelector(".container");
form     = document.querySelector("form");
input     = form["input"];
tasksDiv    = document.querySelector(".tasks");

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// the frist anther //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
 const ArrayTasks = JSON.parse(localStorage.getItem("tasks")) || [] ;
////////////////
pushArray = (text , date , agree)=>{
    const task = {
        title : text,
        id    : date,
        avilable : agree,
    }  
    if(task.text == "yes"){
        task.avilable.yes
    }else if(task.text == "no"){
        task.avilable.no;
    }
    /// push //////
    ArrayTasks.push(task);
   createElement(task);
   localStorage.setItem("tasks" , JSON.stringify(ArrayTasks));
}
///////////////
const createElement = (task) =>{
        const div = document.createElement("div");
        div.classList.add("task");
        if(task.avilable){
            div.classList.add("done");
        } 
        div.appendChild(document.createTextNode(task.title));
        div.setAttribute("data-id" , task.id);
        div.setAttribute("is-avilable" , task.avilable);
        // create delete span
        const Delete = document.createElement("span");
        Delete.innerText = "Delete";
        Delete.classList.add("delete");
        div.append(Delete);
        ///// append div
        tasksDiv.append(div);     
}
/////////////////////////////////
ArrayTasks.forEach(createElement);
//////////////////////////////////
tasksDiv.onclick = function(e){
    if(e.target.classList.contains("delete")){

        e.target.parentElement.remove();

        taskParentId = e.target.parentElement.getAttribute("data-id");

       newArrayTasks =  ArrayTasks.filter((task)=> task.id != taskParentId) ;

       localStorage.setItem("tasks" , JSON.stringify(newArrayTasks));
    }
    //
    if(e.target.classList.contains("task")){

            taskId = e.target.getAttribute("data-id");    
        
            changeAvilable(taskId);



            localStorage.setItem("tasks" , JSON.stringify(ArrayTasks));
    } 
}
/////////
function changeAvilable(taskId){
    for(i = 0 ; i < ArrayTasks.length ; i++){
        if(ArrayTasks[i].id == taskId){
            ArrayTasks[i].avilable == true ?  ArrayTasks[i].avilable = false : ArrayTasks[i].avilable = true;
        }
    }
}
///////////////////////
form.onsubmit = (e)=>{
    e.preventDefault();
    if (input.value !== "") {
      pushArray(input.value , Date.now() ,input.value == "yes" ? true : false);
        input.value = "";       
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// the second anther //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
/*
const ArrayTasks = JSON.parse(localStorage.getItem("tasks")) || [] ;

pushArray = (title , id , avilable)=>{
    title ,id , avilable,
    /// push
    ArrayTasks.push({title ,id,avilable,});

  localStorage.setItem("tasks" , JSON.stringify(ArrayTasks));
   return {title , id , avilable}
}

const   createElement = ({title , id , avilable}) =>{
        // create div
        const div = document.createElement("div");
        div.classList.add("task");
        div.classList.add("done"); 
        div.appendChild(document.createTextNode(title));
        div.setAttribute("data-id" , id);
        div.setAttribute("is-avilable" , avilable);
        // create delete span
        const Delete = document.createElement("span");
        Delete.innerText = "Delete";
        Delete.classList.add("delete");
        div.append(Delete);
        ///// append div
        tasksDiv.append(div);
}

ArrayTasks.forEach(createElement) ;

form.onsubmit = (e)=>{
    e.preventDefault();
   const newPush =  pushArray(   
    input.value ,
    Date.now(),
    false,
    ) ;
    createElement(newPush);
    input.value = "";
}
*/
const taskname = document.querySelector("#taskname");
//const addBtn=document.querySelector("#addBtn");
const container = document.querySelector("#container");
let tasks = [];
let id = 1;

//localStorage.setItem("Data","Hello");

/*
addBtn.addEventListener("click",function(){
    const p=document.createElement("p");
    p.innerText=taskname.value;
    container.appendChild(p);
    taskname.value='';

})*/

taskname.addEventListener("keypress", function (evt) {

    //console.log(evt);
    if (evt.code == "Enter") {
        let task = { taskid: id, title: taskname.value, status: 'Pending' };
        id++;

        tasks.push(task);
        

        addToDom(task);
        console.log(tasks);
        localStorage.setItem("tasks",JSON.stringify(tasks));

        //document.write(JSON.stringify(tasks));
       // "[object Object]"

    }

})
function addToDom(task) {
    const div = document.createElement("div");
    div.setAttribute("id",task.taskid);

    const p = document.createElement("span");
    p.innerText = task.title;
    div.appendChild(p);

    const chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.addEventListener("click", function () {
        //console.log(chk.checked)
        let status = "Pending";
        if (chk.checked == true) {
            p.style.textDecoration = "line-through";
            status = "completed";
        }
        else
            p.style.textDecoration = "none";
        tasks = tasks.map(function (item) {
            if (item.taskid == task.taskid)
                item.status = status;
            return item;

        })
         localStorage.setItem("tasks",JSON.stringify(tasks));
        console.log(tasks);

    })
    div.appendChild(chk);


    const delButton = document.createElement("button");
    delButton.innerText = "Del";
    /*delButton.addEventListener("click",function(){
        div.remove();
    })
        */
    delButton.addEventListener("click", deleteHandler)

    div.appendChild(delButton);


    container.appendChild(div);

    //    container.appendChild(p);
    taskname.value = '';
}

function deleteHandler(evt) {
    const id=evt.target.parentNode.getAttribute("id");

    evt.target.parentNode.remove();
    tasks=tasks.filter(function(item){
        if(item.taskid!=id)
            return true;
    })

     localStorage.setItem("tasks",JSON.stringify(tasks));

}
//console.log(JSON.parse( localStorage.getItem("tasks"))[0].title);

function loadStorage()
{
    tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(function(task){
        addToDom(task);
    })

}
loadStorage();
/*
Name, Quanity,Price,Description ->Add
*/
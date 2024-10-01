function addToDoList(){

    let listaTareas = document.getElementById("listaTareas");

    let tarea = document.getElementById("tarea").value;

    console.log(tarea);

    let li = document.createElement("li");

    li.textContent = tarea;

    let button = document.createElement("button");
    
    button.textContent = "Tarea Completada"

    button.addEventListener("click", ()=>{
        li.remove()
    })

    li.appendChild(button)

    listaTareas.appendChild(li)

    document.getElementById("tarea").focus()
}
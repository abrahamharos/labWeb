var post = document.getElementById("ButtonPost")
var clear = document.getElementById("ButtonClear")
var mark = document.getElementById("ButtonMark")
var del = document.getElementById("ButtonDelete")

post.addEventListener("click", TodoPost)
clear.addEventListener("click", TodoClear)
mark.addEventListener("click", TodoMark)
del.addEventListener("click", TodoDel)

function TodoPost(e) {
    e.preventDefault()
    var taskText = document.getElementById("TaskText")
    var todoText = taskText.value
    taskText.value = ""
    
    var list = document.getElementById("listOfTodos")
    var div = document.createElement("div")
    var checkbox = document.createElement("input")
    var label = document.createElement("label")

    checkbox.type = "checkbox"
    checkbox.name = "todo"
    label.textContent = todoText

    div.appendChild(checkbox)
    div.appendChild(label)

    list.appendChild(div)
}

function TodoClear() {
    var todos = document.getElementsByName("todo")
    for(var i=0; i< todos.length; i++){
        todos[i].checked = false
    }
}

function TodoMark() {
    var todos = document.getElementsByName("todo")
    for(var i=0; i< todos.length; i++){
        todos[i].checked = true
    }
}

function TodoDel() {
    var list = document.getElementById("listOfTodos")
    list.innerHTML = ""
    // var todos = document.getElementsByName("todo")
    // for(var i=0; i< todos.length; i++){
    //     todos[i].parentElement.remove()
    // }
}

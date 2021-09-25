$("#ButtonPost").on("click", function(e){
    e.preventDefault()

    var listOfTodos = $("#listOfTodos")
    var div = $("<div>")
    var checkbox = $("<input>")
    var label = $("<label>")

    var todoText = $("#TaskText")

    checkbox.attr("type", "checkbox")
    checkbox.attr("class", "todo")
    label.text(todoText.val())

    div.append(checkbox)
    div.append(label)

    listOfTodos.append(div)

    todoText.val("")
})

$("#ButtonClear").on("click", function(e){
    e.preventDefault()

    $(".todo").each(function(){
        $(this).prop("checked", false)
    })
})

$("#ButtonMark").on("click", function(e){
    e.preventDefault()

    $(".todo").each(function(){
        $(this).prop("checked", true)
    })
})

$("#ButtonDelete").on("click", function(e){
    e.preventDefault()

    var listOfTodos = $("#listOfTodos")

    listOfTodos.html("")
})


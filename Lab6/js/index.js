$(".agregar").on("click", function(e){
    e.preventDefault()

    var item = $("<p>")
    item.attr("class", "itemShop")
    itemText = $("#newText")
    item.text(itemText.val())

    var btnCheck = $("<button>")
    btnCheck.text("Check")
    btnCheck.attr("class", "checar")
    var btnDelete = $("<button>")
    btnDelete.text("Delete")
    btnDelete.attr("class", "del")

    var div = $("<div>")
    div.attr("class", "lis")
    div.append(item)
    div.append(btnCheck)
    div.append(btnDelete)

    var lista = $(".Lista")
    lista.append(div)

    itemText.val("")
});

$(".Lista").on("click", ".checar", function(e){
    var container = $(this).parent()
    container.toggleClass("chec")
    $(this).unbind('click')
})

$(".Lista").on("click", ".del", function(e){
    var container = $(this).parent()
    container.remove()
})
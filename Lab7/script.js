$(document).ready(function() {

    var animals = ["dog", "cat", "rabbit", "frog", "chicken", "bird", "turtle"];

    populateButtons(animals, "animal-button", "#animal-buttons")

    function populateButtons(arrayToUse, classToAdd, placeHolder){
        for(var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(placeHolder).append(a);
        }
    }

    $("#add-animal").on("click", function(e){
        e.preventDefault();
        animalInput = $("#animal-input")
        newAnimal = animalInput.val()
        animalInput.val("")
        $("#animal-buttons").empty()
        animals.push(newAnimal)
        populateButtons(animals, "animal-button", "#animal-buttons")
    })

    $("#animal-buttons").on("click", ".animal-button", function(){

        $("#animals").empty()
        var search = $(this).attr("data-type")
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=i7f5Uvo6XsCczctOdLiXp3VLyVI6rqoL&limit=10"

        $.ajax({url:queryUrl}).then(function(response){
            var results = response.data
            
            for (var i = 0; i < results.length; i++) {
                var animalDiv = $("<div>");
                animalDiv.addClass("animal-item");
                console.log(animalDiv)
                var rating = results[i].rating
                var p = $("<p>").text("Rating: " + rating)

                var animated = results[i].images.fixed_height.url
                var still = results[i].images.fixed_height_still.url

                var animalImage = $("<img>");
                animalImage.attr("src", still);
                animalImage.attr("data-still", still);
                animalImage.attr("data-animate", animated);
                animalImage.attr("data-isAnimated", "false");
                animalImage.addClass("animal-image");

                animalDiv.append(p)
                animalDiv.append(animalImage)

                $("#animals").append(animalDiv)
            }

        })

    })

    // Registro del evento para la imagen
    $("#animals").on("click", ".animal-item", function(){
        var animalImg = $(this).children("img.animal-image")

        if (animalImg.attr("data-isAnimated") == "false") {
            animalImg.attr("src", animalImg.attr("data-animate"));
            animalImg.attr("data-isAnimated", "true")
        } else {
            animalImg.attr("src", animalImg.attr("data-still"));
            animalImg.attr("data-isAnimated", "false")
        }
    })
});

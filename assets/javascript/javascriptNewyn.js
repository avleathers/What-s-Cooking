var ingredientList = []

// Adds user input ingredients to array above.
$("input").keypress(function (event) {
    if (event.which === 13) {
        var addIngredient = $(this).val().trim();
        ingredientList.push(addIngredient);
    }
});

// app ID and api key for Edamam//
var edamam_id = "d02d745b";
var edamam_key = "a27da899f17064b2672f7c38fa09c34e";

// On click event for getting recipes to append to page.
$(document).on("click", "#submitButton", function () {
    databaseIngredients();
    function databaseIngredients() {
        event.preventDefault();
        $.ajax({
            url: "https://api.edamam.com/search?q=" + ingredientList + "&app_id=" + edamam_id + "&app_key=" + edamam_key + "&to=30",
            method: "GET"
        })
            .then(function (response) {
                // To get 1 image to append into the "Let's get cooking" div
                console.log(response);
                // console.log(results[0].recipe.image);
                // var d = $('<div>');
                // var images = $('<img>');
                // images.attr("src", results[0].recipe.image);
                // d.append(images);
                // $("#recipeResults").append(d);
                var results = response.hits;
                // For loop to get 10 info bits into array and append to "Let's get cooking"
                for (var i = 0; i < results.length; i++) {
                    var d = $('<span>');
                    var images = $('<img>');
                    var a = $('<a>');
                    a.append(images);
                    var p = $('<p>');
                    images.attr('src', results[i].recipe.image);
                    d.addClass('recipeArea');
                    // Gets the image to be a link
                    a.attr("href", results[i].recipe.url);
                    //Opens link in new window
                    a.attr("target", "_blank");
                    //Adds Title of the recipe.
                    p.text(results[i].recipe.label);
                    //Puts label above image
                    d.prepend(p);
                    //Adds image to the page.
                    d.append(a);
                    $("#recipeResults").append(d);

                }
            })
    }
});

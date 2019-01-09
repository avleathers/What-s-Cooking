var list = []
// click on span to delete ingredient
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        list.splice(list.indexOf($(this).attr("name")), 1);
        console.log(list);
        listDisplay();
    });
    event.stopPropagation();
});
//push ingredients on keypress
$("input").keypress(function (event) {
    if (event.which === 13) {
        var addIngredient = $(this).val();
        list.push(addIngredient);
        $(this).val("");
        listDisplay();
    };
})

//push ingredients on click
$("#addIngredients").on("click",function (event) {
        var addIngredient = $("#ingredientInput").val();
        console.log($("#ingredientInput").val());
        list.push(addIngredient);
        $("#ingredientInput").val("");
        listDisplay();
})

//appending my list of ingredients
function listDisplay() {
    $("ul").empty();
    for (i = 0; i < list.length; i++) {
        $("ul").append("<li name='" + list[i] + "'><span><i class='far fa-trash-alt'></i></span> " + list[i] + "</li>")
        console.log(list[i]);
    }
}
// adding giphy API to append to page
function addFood() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=cooking&api_key=kRsHuhDISov3OLv59PyTyJHBnpNQclEY&limit=100";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var randomNumber = Math.floor(Math.random() * 100) + 1
            var results = response.data;
            var foodDiv = $("#food");
            var foodImage = $("<img>");
            foodImage.attr("src", results[randomNumber].images.downsized.url);
            foodDiv.append(foodImage);
        });
};
$(function () {
    addFood();
});

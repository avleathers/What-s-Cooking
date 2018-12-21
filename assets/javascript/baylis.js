var database = firebase.database();

var ingredientList = [];
var databaseIngredients = {
    ingredients: {}
};

// database.ref().on("value", function (snapshot) {
//     if (snapshot.val() && snapshot.val().ingredients) {
//         databaseIngredients = snapshot.val();
//     }
// });

// $("#submitButton").on("click", function () {
//     event.preventDefault();
//     for (i = 0; i < ingredientList.length; i++) {
//         if (databaseIngredients.ingredients[ingredientList[i]]) {
//             databaseIngredients.ingredients[ingredientList[i]]++;
//         }
//         else {
//             databaseIngredients.ingredients[ingredientList[i]] = 1;
//         }
//     }
//     console.log(databaseIngredients)
//     database.ref().set(databaseIngredients);
// });

function commonIngredientList() {
    var commonList = [];
    database.ref('ingredients').orderByValue().limitToLast(10).on('value', function(snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function(childsnapShot){
            var ingredientKey = childsnapShot.key;
            var ingredientSearched = childsnapShot.val();
            console.log(childsnapShot.val())
            commonList.push(ingredientKey + ": " + ingredientSearched);
            console.log(commonList);
            for (i = 9; i > commonList.length; i --) {
                var a = ("<li>" + i)
                $("#commonIngredients").append(a);
            }
        });
    });
}

commonIngredientList();

// commentsRef.on('child_changed', function(data) {
//     setCommentValues(postElement, data.key, data.val().text, data.val().author);
//   });

// orderByValue()	
// var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');

// ref.once('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childKey = childSnapshot.key;
//       var childData = childSnapshot.val();
//       // ...
//     });
//   });
  
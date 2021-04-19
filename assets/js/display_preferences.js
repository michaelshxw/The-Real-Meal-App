var nameDiv = document.getElementById("name");
var numberDiv = document.getElementById("number-step")
var stepDiv = document.getElementById("step");
var savedDiet = localStorage.getItem("dietaryValue"); //Get value from localStorage
console.log(savedDiet)
console.log(typeof savedDiet)




getSpoonacular();

function getSpoonacular(){
    var one = "https://api.spoonacular.com/recipes/complexSearch/?diet="
    var two = savedDiet
    var three = "&number=1&apiKey=07f9733071ab43b69f65f79c48bee577"
    
    var recipeURL = one+two+three;
    console.log("First call *** " + recipeURL);
    getApi(recipeURL);
}


function getApi(url) {
    
fetch(url)

    .then(function (response) {
      return response.json();     
    })
    .then(function (data) {
        nameDiv.innerHTML = data.results[0].title
        var recepieId = data.results[0].id

        var img = document.createElement("img"); 
             img.src = data.results[0].image
             var divImage = document.getElementById("MainDiv")
             divImage.appendChild(img)
             console.log(img.src)

        getApiInstructions(recepieId);   
    })
}
//***********************SECOND CALL*******************************************************/
function getApiInstructions(ID){
    var one = "https://api.spoonacular.com/recipes/"
    var two = ID
    var three = '/analyzedInstructions?&apiKey=07f9733071ab43b69f65f79c48bee577';
    var instructions = one+two+three
    console.log("Second call *** " + instructions);
    getApi2(instructions);
}

function getApi2(url2) {
    
    fetch(url2)
    
        .then(function (response) {
          return response.json();          
        })
        .then(function (data) {
            numberDiv.innerHTML = data[0].steps[0].number
            /* stepDiv.innerHTML = data[0].steps[0].step */ //Shows 1 spet only
            
            /* var firstArray;
            for(var i=0; i <= data.lenght; i++){
                firstArray = data[i]
                console.log(data[i])
            }
                
            console.log(typeof firstArray) */





        })
    }

    /* var kaka = 'https://api.spoonacular.com/recipes/complexSearch/?query=Whole30&number=1&apiKey=07f9733071ab43b69f65f79c48bee577'
    console.log(kaka)
 */
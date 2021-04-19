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
            console.log(data)
            console.log(typeof data)
            numberDiv.innerHTML = data[0].steps[0].number
            /* stepDiv.innerHTML = data[0].steps[0].step */ //Shows 1 spet only
            
            for(var i = 0; i < data.length; i++){
               var oneIn = data[i];
               console.log(oneIn)
               console.log(typeof oneIn)
            }
            var twoIn = oneIn.steps
            console.log(twoIn)
            console.log(typeof twoIn)
             var step1 = twoIn[0].step
             var step2 = twoIn[1].step
             var step3 = twoIn[2].step
             var step4 = twoIn[3].step
             var step5 = twoIn[4].step
             var step6 = twoIn[5].step
             var step7 = twoIn[6].step
             var step8 = twoIn[7].step
             var step9 = twoIn[8].step

             var displayRecipe = step1 + "<br>" + "<hr>" + step2 + "<br>" + "<hr>" + step3 + "<br>" + "<hr>" + step4 + "<br>" + "<hr>" + step5 + "<br>" + "<hr>" + step6 + "<br>" + "<hr>" + step7 + "<br>" + "<hr>" + step8 + "<br>" + "<hr>" + step9  

             stepDiv.innerHTML = displayRecipe



        })
    }

    /* var kaka = 'https://api.spoonacular.com/recipes/complexSearch/?query=Whole30&number=1&apiKey=07f9733071ab43b69f65f79c48bee577'
    console.log(kaka)
 */
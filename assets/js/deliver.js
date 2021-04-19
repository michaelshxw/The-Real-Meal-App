
let appID = "apiKey=d55148fba033409f8b255b76359cebb3";
let spoonURL ="https://api.spoonacular.com/recipes/716429/information?";
let dietPref = "&cusine=";
let exclude = "&exclude=";
let intolerances ="&intolerances=";
let excludeIngridients = "&excludeIngredients=";
let noOfmeals = "&number=";
let calories = "&calories=";
let instructions = "&instructionsRequired=true";
let recipieInfo = "&addRecipeInformation=true"
const usersProfile = JSON.parse(localStorage.getItem("profile"));

let endP = spoonURL + appID + dietPref + usersProfile.dietryPref + exclude + usersProfile.allergies + noOfmeals + usersProfile.noOfRecipies + calories + usersProfile.calories + instructions + recipieInfo;
contactSpoon(endP);


function contactSpoon(endPoint)
{
fetch(endPoint)
    .then(function response(data) {

        if(!data.ok) //404 error or similar page fail
        {
            throw new Error; // go to catch 
        }

        return data.json();
    })
    .then(function process(pData) {

        localStorage.setItem("meal-plan", JSON.stringify(pData));
        populate();

    })
    .catch(function error(error)
    {
        alert("Unable to retrieve weather report. Check your spelling and try again...");
    });
}



function populate()
{

let meals = localStorage.getItem("meal-plan");
meals = JSON.parse(meals);
const recipeCards = document.getElementsByClassName("recipeCard");

let rchild, rName, rSummary

if(meals != null)
{
for (i = 0; i < recipeCards.length; i++)
{
    rType = meals.dishTypes[0];
    rName = meals.title;
    rImg = meals.image;
    
    rChild = recipeCards[i].children;
    rChild[0].textContent = rName;
    rChild[1].textContent = rType;
    rChild[3].setAttribute("src", rImg);
}
}
}


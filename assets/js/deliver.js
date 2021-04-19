
let appID = "&apiKey=4b2eba9b9022436d93402d88effe7013";
let spoonURL = "https://api.spoonacular.com/mealplanner/generate?timeFrame=day?";
let dietPref = "&diet=";
let exclude = "&exclude=";
let targetCalories = "&targetCalories="

let usersProfile = localStorage.getItem("profile");
usersProfile = JSON.parse(usersProfile);



let endP = spoonURL + appID + targetCalories + usersProfile.calories + dietPref + usersProfile.selectionText[4];
console.log(endP);

contactSpoon(endP);
function contactSpoon(endPoint) {
    fetch(endPoint)
        .then(function response(data) {

            if (!data.ok) //404 error or similar page fail
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
        alert("User profile has not been filled out properly, please click 'edit profile' and try again");
    });
}



function populate() {

    let meals = localStorage.getItem("meal-plan");
    meals = JSON.parse(meals);
    console.log(meals);

    //append title of first recipe
    var firstMealTitle = meals.meals[0].title;
    var recipeTitleOne = document.querySelector('.recipe-title1')
    recipeTitleOne.append(firstMealTitle)

    //append title of second recipe
    var secondMealTitle = meals.meals[1].title;
    var recipeTitleTwo = document.querySelector('.recipe-title2')
    recipeTitleTwo.append(secondMealTitle)

    //append title of third recipe
    var thirdMealTitle = meals.meals[2].title;
    var recipeTitleThree = document.querySelector('.recipe-title3')
    recipeTitleThree.append(thirdMealTitle)

    //append link of first recipe
    var firstMealLink = meals.meals[0].sourceUrl;
    var recipeURL1 = document.querySelector('.recipe-url1')
    recipeURL1.append(firstMealLink);
    recipeURL1.href = firstMealLink;
t
    //append link of second recipe
    var secondMealLink = meals.meals[1].sourceUrl;
    var recipeURL2 = document.querySelector('.recipe-url2')
    recipeURL2.append(secondMealLink);
    recipeURL2.href = secondMealLink;


    //append link of third recipe
    var thirdMealLink = meals.meals[2].sourceUrl;
    var recipeURL3 = document.querySelector('.recipe-url3')
    recipeURL3.append(thirdMealLink);
    recipeURL3.href = thirdMealLink;


    //image append
    //declare variables
    var imageLink = "https://spoonacular.com/recipeImages/";
    var imageSize = "636x393"

    //first image
    var imageFormat1 = "." + meals.meals[0].imageType
    var imageOneID = meals.meals[0].id + "-";
    var imageURL1 = imageLink + imageOneID + imageSize + imageFormat1;
    var img = document.createElement("img")
    img.src = imageURL1
    var src = document.querySelector('.recipe-image1')
    src.appendChild(img)

    //second image
    var imageFormat2 = "." + meals.meals[1].imageType
    var imageTwoID = meals.meals[1].id + "-";
    var imageURL2 = imageLink + imageTwoID + imageSize + imageFormat2;
    var img = document.createElement("img")
    img.src = imageURL2
    var src = document.querySelector('.recipe-image2')
    src.appendChild(img)

    //third image
    var imageFormat3 = "." + meals.meals[2].imageType
    var imageThreeID = meals.meals[2].id + "-";
    var imageURL3 = imageLink + imageThreeID + imageSize + imageFormat3;
    var img = document.createElement("img")
    img.src = imageURL3
    var src = document.querySelector('.recipe-image3')
    src.appendChild(img)

    //append total nutritional value

    var totalCalories = meals.nutrients.calories;
    var totalProtein = meals.nutrients.protein;
    var totalFat = meals.nutrients.fat;
    var totalCarbs = meals.nutrients.carbohydrates;
    var totalCalEl = document.querySelector('#totalCal')
    var totalProteinEl = document.querySelector('#totalProtein')
    var totalFatEl = document.querySelector('#totalFat')
    var totalCarbsEl = document.querySelector('#totalCarbs')
    totalCalEl.append("Total calories: " + totalCalories)
    totalProteinEl.append("Total protein: " + totalProtein)
    totalFatEl.append("Total fat: " + totalFat)
    totalCarbsEl.append("Total carbohydrates: " + totalCarbs)

}

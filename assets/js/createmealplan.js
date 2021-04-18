//when the open modal button is clicked, open the modal
document.querySelector('.open-modal').addEventListener('click', function (event) {
    event.preventDefault();
    var modalDisplay = document.querySelector('.modal'); 
    var htmlDocument = document.querySelector('html');
    modalDisplay.classList.add('is-active');
    htmlDocument.classList.add('is-clipped');
    //close modal
    //clicking on the background closes modal
    modalDisplay.querySelector('.modal-background').addEventListener('click', function (event) {
        event.preventDefault();
        modalDisplay.classList.remove('is-active');
        htmlDocument.classList.remove('is-clipped');
    });
    //cancel button closes modal
    modalDisplay.querySelector('#modal-cancel').addEventListener('click', function (event) {
        event.preventDefault();
        modalDisplay.classList.remove('is-active');
        htmlDocument.classList.remove('is-clipped');
    });
    //x button closes modal
    modalDisplay.querySelector('.delete').addEventListener('click', function (event) {
        event.preventDefault();
        modalDisplay.classList.remove('is-active');
        htmlDocument.classList.remove('is-clipped');
    });
});

//when save button is clicked, log all data to local storage
var saveModal = document.querySelector('.saveModal')
saveModal.addEventListener("click", saveModalSubmit)
function saveModalSubmit(){
    var modalDisplay = document.querySelector('.modal'); 
    modalDisplay.classList.remove('is-active');
    var htmlDocument = document.querySelector('html');
    htmlDocument.classList.remove('is-clipped');
    var mealPlanTitle = document.querySelector('h2');
    mealPlanTitle.style.display = "none";
    var generateBtn = document.querySelector('.open-modal');
    generateBtn.style.display = "none";
    var recipeNum = document.querySelector('.recipeNum').value
    localStorage.setItem("recipeNum", JSON.stringify(recipeNum))
    var calNum = document.querySelector('.calNum').value
    localStorage.setItem("calNum", JSON.stringify(calNum))
    var dietaryQuick = document.querySelector('#dietaryQuick').value
    localStorage.setItem("dietaryQuick", JSON.stringify(dietaryQuick))
}

//save all user options globally for access later when generating meal plans
var userOptions = {
    name: localStorage.getItem('nameValue'),
    age: localStorage.getItem('ageValue'),
    height: localStorage.getItem('heightValue'),
    weight: localStorage.getItem('weightValue'),
    gender: localStorage.getItem('genderValue'),
    activity: localStorage.getItem('activityValue'),
    goal: localStorage.getItem('goalValue'),
    diet: localStorage.getItem('dietaryValue'),
    recipes: localStorage.getItem('recipeNum'),
    calories: localStorage.getItem('calNum'),
    quickSelectDiet: localStorage.getItem('dietaryQuick')
}
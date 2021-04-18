//declare all variables
var formContainer = document.querySelector(".screen")
var screenOne = document.querySelector(".one")
var screenTwo = document.querySelector(".two")
var screenThree = document.querySelector(".three")
var screenFour = document.querySelector(".four")
var nextBtnOne = document.querySelector("#nextBtnOne")
var nextBtnTwo = document.querySelector("#nextBtnTwo")
var nextBtnThree = document.querySelector("#nextBtnThree")
var cancelBtnOne = document.querySelector('#cancelone')
var cancelBtnTwo = document.querySelector('#cancelTwo')
var cancelBtnThree = document.querySelector('#cancelThree')
var regNow = document.querySelector("#reg-now")
var regLater = document.querySelector("#reg-later")

//register now button, clears current display, displays page two
regNow.addEventListener("click", regNowSubmit)
function regNowSubmit(){
    screenOne.style.display = "none";
    screenTwo.style.display = "block";
}

//register later button, skips sign up process, displays first page outside sign up (currently blank)
regLater.addEventListener("click", regLaterSubmit)
function regLaterSubmit(){
    formContainer.style.display = "none";
}

//first next button, displays next page
nextBtnOne.addEventListener("click", nextBtnOneSubmit)
function nextBtnOneSubmit(){
    screenTwo.style.display = "none";
    screenThree.style.display = "block";
    var nameValue = document.getElementById('nameValue').value
    localStorage.setItem("nameValue", JSON.stringify(nameValue))
    var ageValue = document.getElementById('ageValue').value
    localStorage.setItem("ageValue", JSON.stringify(ageValue))
    var heightValue = document.getElementById('heightValue').value
    localStorage.setItem("heightValue", JSON.stringify(heightValue))
    var weightValue = document.getElementById('weightValue').value
    localStorage.setItem("weightValue", JSON.stringify(weightValue))
    var genderValue = document.getElementById('genderValue').value
    localStorage.setItem("genderValue", JSON.stringify(genderValue))
}

//second next button, displays next page
nextBtnTwo.addEventListener("click", nextBtnTwoSubmit)
function nextBtnTwoSubmit(){
    screenThree.style.display = "none";
    screenFour.style.display = "block";
    var activityValue = document.getElementById('activityValue').value
    localStorage.setItem("activityValue", JSON.stringify(activityValue))
    var goalValue = document.getElementById('goalValue').value
    localStorage.setItem("goalValue", JSON.stringify(goalValue))
    var dietaryValue = document.getElementById('dietaryValue').value
    localStorage.setItem("dietaryValue", JSON.stringify(dietaryValue))
}

//third next button, displays first page outside of sign up
nextBtnThree.addEventListener("click", nextBtnThreeSubmit)
function nextBtnThreeSubmit(){
    screenFour.style.display = "none";
    var allergyValue = document.getElementById('allergyValue').value
    localStorage.setItem("allergyValue", JSON.stringify(allergyValue))
    alert('All Data Saved')
}

//first cancel button, goes to page one of sign up
cancelBtnOne.addEventListener("click", cancelBtnSubmitOne)
function cancelBtnSubmitOne(){
    screenTwo.style.display = "none"
    screenOne.style.display = "block"
    localStorage.clear();
}

//second cancel button, goes to page one of sign up
cancelBtnTwo.addEventListener("click", cancelBtnSubmitTwo)
function cancelBtnSubmitTwo(){
    screenThree.style.display = "none"
    screenOne.style.display = "block"
    localStorage.clear();
}

//third cancel button, goes to page one of sign up
cancelBtnThree.addEventListener("click", cancelBtnSubmitThree)
function cancelBtnSubmitThree(){
    screenFour.style.display = "none"
    screenOne.style.display = "block"
    localStorage.clear();
}

// //form page 1 save data

var userOptions = {
    name: localStorage.getItem('nameValue'),
    age: localStorage.getItem('ageValue'),
    height: localStorage.getItem('heightValue'),
    weight: localStorage.getItem('weightValue'),
    gender: localStorage.getItem('genderValue'),
    activity: localStorage.getItem('activityValue'),
    goal: localStorage.getItem('goalValue'),
    diet: localStorage.getItem('dietaryValue')
}
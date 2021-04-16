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
    console.log('register now button clicked');
    screenOne.style.display = "none";
    screenTwo.style.display = "block";
}

//register later button, skips sign up process, displays first page outside sign up (currently blank)
regLater.addEventListener("click", regLaterSubmit)
function regLaterSubmit(){
    console.log('register later button clicked');
    formContainer.style.display = "none";
}

//first next button, displays next page
nextBtnOne.addEventListener("click", nextBtnOneSubmit)
function nextBtnOneSubmit(){
    console.log('one');
    screenTwo.style.display = "none";
    screenThree.style.display = "block";
}

//second next button, displays next page
nextBtnTwo.addEventListener("click", nextBtnTwoSubmit)
function nextBtnTwoSubmit(){
    console.log('two');
    screenThree.style.display = "none";
    screenFour.style.display = "block";
}

//third next button, displays first page outside of sign up
nextBtnThree.addEventListener("click", nextBtnThreeSubmit)
function nextBtnThreeSubmit(){
    console.log('three');
    screenFour.style.display = "none";
}

//first cancel button, goes to page one of sign up
cancelBtnOne.addEventListener("click", cancelBtnSubmitOne)
function cancelBtnSubmitOne(){
    console.log('cancel');
    screenTwo.style.display = "none"
    screenOne.style.display = "block"
    localStorage.clear();
}

//second cancel button, goes to page one of sign up
cancelBtnTwo.addEventListener("click", cancelBtnSubmitTwo)
function cancelBtnSubmitTwo(){
    console.log('cancel');
    screenThree.style.display = "none"
    screenOne.style.display = "block"
    localStorage.clear();
}

//third cancel button, goes to page one of sign up
cancelBtnThree.addEventListener("click", cancelBtnSubmitThree)
function cancelBtnSubmitThree(){
    console.log('cancel');
    screenFour.style.display = "none"
    screenOne.style.display = "block"
    localStorage.clear();
}

console.log(localStorage);
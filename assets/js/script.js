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

regNow.addEventListener("click", regNowSubmit)
function regNowSubmit(){
    console.log('register now button clicked');
    screenOne.style.display = "none";
    screenTwo.style.display = "block";
}

regLater.addEventListener("click", regLaterSubmit)
function regLaterSubmit(){
    console.log('register later button clicked');
    formContainer.style.display = "none";
}
nextBtnOne.addEventListener("click", nextBtnOneSubmit)
function nextBtnOneSubmit(){
    console.log('one');
    screenTwo.style.display = "none";
    screenThree.style.display = "block";
}

nextBtnTwo.addEventListener("click", nextBtnTwoSubmit)
function nextBtnTwoSubmit(){
    console.log('two');
    screenThree.style.display = "none";
    screenFour.style.display = "block";
}

nextBtnThree.addEventListener("click", nextBtnThreeSubmit)
function nextBtnThreeSubmit(){
    console.log('three');
    screenFour.style.display = "none";
}

cancelBtnOne.addEventListener("click", cancelBtnSubmitOne)
cancelBtnTwo.addEventListener("click", cancelBtnSubmitTwo)
cancelBtnThree.addEventListener("click", cancelBtnSubmitThree)

function cancelBtnSubmitOne(){
    console.log('cancel');
    screenTwo.style.display = "none"
    screenOne.style.display = "block"
}

function cancelBtnSubmitTwo(){
    console.log('cancel');
    screenThree.style.display = "none"
    screenOne.style.display = "block"
}

function cancelBtnSubmitThree(){
    console.log('cancel');
    screenFour.style.display = "none"
    screenOne.style.display = "block"
}
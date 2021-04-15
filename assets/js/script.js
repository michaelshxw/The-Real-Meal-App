var signUpContainer = document.querySelector(".signup")
var screenOne = document.querySelector(".screen1")
var screenTwo = document.querySelector(".screen2")
var screenTwo = document.querySelector(".screen3")
var screenThree = document.querySelector(".screen4")
var regNow = document.querySelector("#reg-now")

regNow.addEventListener("click", signUpHandler)





function signUpHandler(n){
    console.log('hi');
    signUpContainer.innerHTML = "";
    var x = document.querySelector(".screen1");
    x[n].style.display = "none";
}


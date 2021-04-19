let personProfile = new Object();
const userProfile = document.querySelectorAll(".input");


personProfile.username = "";
personProfile.userAge = "";
personProfile.userHeight = "";
personProfile.userWeight = "";
personProfile.userGender = "";
personProfile.activityLevel = "";
personProfile.goal = "";
personProfile.dietryPref = "";
personProfile.allergies = "";

let nextBtn = document.getElementById("nextBtnOne");

nextBtn.addEventListener("click",function (){
personProfile.username = userProfile[0].value;
personProfile.userAge = userProfile[1].options[userProfile[1].selectedIndex].text;
personProfile.userHeight = userProfile[2].value;
personProfile.userWeight = userProfile[3].value;
personProfile.userGender = userProfile[4].options[userProfile[4].selectedIndex].text;
screenTwo.style.display = "none";
screenThree.style.display = "block";
});



let regNow = document.querySelector("#reg-now")
let screenOne = document.querySelector(".one")
let screenTwo = document.querySelector(".two")
let screenThree = document.querySelector(".three")
let screenFour= document.querySelector(".four")
let nextBtnTwo = document.querySelector("#nextBtnTwo")
let nextBtnThree = document.querySelector("#nextBtnThree")

regNow.addEventListener("click", regNowSubmit)
function regNowSubmit(){
    screenOne.style.display = "none";
    screenTwo.style.display = "block";
}



nextBtnTwo.addEventListener("click", nextBtnTwoSubmit)
function nextBtnTwoSubmit(){

    if(userProfile[5].options[userProfile[5].selectedIndex] === undefined || userProfile[6].options[userProfile[6].selectedIndex] === undefined || userProfile[7].options[userProfile[7].selectedIndex] === undefined)
    {
        alert("Please select all fields")
    }

    else
    {
        personProfile.activityLevel = userProfile[5].options[userProfile[5].selectedIndex].text;
        personProfile.goal = userProfile[6].options[userProfile[6].selectedIndex].text;
        personProfile.dietryPref = userProfile[7].options[userProfile[7].selectedIndex].text;
        screenThree.style.display = "none";
        screenFour.style.display = "block";
    }
}

nextBtnThree.addEventListener("click", nextBtnThreeSubmit)

function nextBtnThreeSubmit(){
    if(userProfile[8].options[userProfile[8].selectedIndex] === undefined)
    {
        alert("Please select an option")
    }

    else
    {
    personProfile.allergies = userProfile[8].options[userProfile[8].selectedIndex].text;
    localStorage.setItem("profile", JSON.stringify(personProfile));
    window.location.assign(".//c.create_meal_plan.html");
    }
}

function getData()
{
 let profileData = localStorage.getItem("profile");
 console.log(JSON.parse(profileData));
} 

getData();


 
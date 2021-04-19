let personProfile = new Object();
const userProfile = document.querySelectorAll(".input");


personProfile.username = "";
personProfile.userAge = "";
personProfile.userHeight = "";
personProfile.userWeight = "";
personProfile.selectionID = new Array();
personProfile.selectionText = new Array();

let nextBtn = document.getElementById("nextBtnOne");

nextBtn.addEventListener("click",function (){
personProfile.username = userProfile[0].value;
personProfile.selectionID.push(userProfile[1].selectedIndex);
personProfile.selectionText.push(userProfile[1].options[userProfile[1].selectedIndex].value);
personProfile.userHeight = userProfile[2].value;
personProfile.userWeight = userProfile[3].value;
personProfile.selectionID.push(userProfile[4].selectedIndex);
personProfile.selectionText.push(userProfile[4].options[userProfile[4].selectedIndex].value);
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
    
        personProfile.selectionID.push(userProfile[5].selectedIndex);
personProfile.selectionText.push(userProfile[5].options[userProfile[5].selectedIndex].value);
personProfile.selectionID.push(userProfile[6].selectedIndex);
personProfile.selectionText.push(userProfile[6].options[userProfile[6].selectedIndex].value);
personProfile.selectionID.push(userProfile[7].selectedIndex);
personProfile.selectionText.push(userProfile[7].options[userProfile[7].selectedIndex].value);
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
    personProfile.selectionID.push(userProfile[8].selectedIndex);
    personProfile.selectionText.push(userProfile[8].options[userProfile[8].selectedIndex].value);
    localStorage.setItem("profile", JSON.stringify(personProfile));
    window.location.assign(".//c.create_meal_plan.html");
    }
}

function getData()
{
 let profileData = localStorage.getItem("profile");
 profileData = JSON.parse(profileData);

} 

getData();


 
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



const usersProfile = getData();
const userInput = document.querySelectorAll(".input");
console.log(usersProfile);

function getData() {
    let profileData = localStorage.getItem("profile");
    return JSON.parse(profileData);
}

let saveModal = document.querySelector('.saveModal')
saveModal.addEventListener("click", saveModalSubmit)
function saveModalSubmit() {

    usersProfile.noOfRecipes = userInput[0].value;
    usersProfile.calories = userInput[1].value;
    localStorage.setItem("profile", JSON.stringify(usersProfile));
    window.location.assign(".//testOutput.html");

}








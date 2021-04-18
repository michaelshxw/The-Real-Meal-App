
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
function saveModalSubmit(event){
    event.preventDefault();
    var modalDisplay = document.querySelector('.modal'); 
    var htmlDocument = document.querySelector('html');
    modalDisplay.classList.remove('is-active');
    htmlDocument.classList.remove('is-clipped');
    var recipeValue = document.getElementById('recipeValue').value
    localStorage.setItem("recipeValue", JSON.stringify(recipeValue))
    console.log(localStorage);
}

var quickSelectOptions = {
    recipeAmount: localStorage.getItem('recipeValue'),
}
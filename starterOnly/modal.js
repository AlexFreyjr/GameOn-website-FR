function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const formName = document.getElementById("first");
const formSurname = document.getElementById("last");
const formMail = document.getElementById("email");
const formBirth = document.getElementById("birthdate");
const submitBtn = document.querySelector(".button");
const formIsValid = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click",closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validation de champs
formName.addEventListener('change', nameVerification);
formSurname.addEventListener('change', nameVerification);
function nameVerification (e){
  if(e.target.value <= minlenght ) { alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.")}
}
//formMail.addEventListener();

//check radio 



//form submitting




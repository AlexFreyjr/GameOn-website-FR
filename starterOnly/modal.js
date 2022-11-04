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
const formTournament = document.getElementById("quantity");
const formCheck = document.querySelectorAll(".checkbox-input");
const formCondition = document.getElementById("checkbox1");

//Error Messages
const nameErrorMsg = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const mailErrorMsg = "Veuillez entrer une adresse mail valide.";
const dateErrorMsg = "Vous devez entrer votre date de naissance.";
const checkErrorMsg = "Vous devez choisir une option.";
const conditionErrorMsg = "Vous devez vérifier que vous acceptez les termes et conditions.";
const tournamentErrorMsg = "Merci d'entrer un chiffre";

//Variables need to be true to validate form
let fnameIsValid = false;
let lnameIsValid = false;
let mailIsValid = false;
let dateIsValid = false;
let tournamentIsValid = false;
let checkIsValid = false;
let conditionIsValid = true;

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
// Error message
function formError (text, el, visibility) {
  document.querySelector(`.${el}`).style.visibility = visibility;
  document.querySelector(`.${el}`).innerText = text;
}
//name validation
formName.addEventListener('input', function (e) {
  if(e.target.value.length < 2 ) { 
    formError(nameErrorMsg, "error-first", "visible");
  }
  else{
    formError(nameErrorMsg, "error-first", "hidden");
    fnameIsValid = true;
  }
});
formSurname.addEventListener('input', function (e){
  if(e.target.value.length < 2 ) { 
    formError(nameErrorMsg, "error-last", "visible")
  }
  else{
    formError(nameErrorMsg, "error-last", "hidden");
    lnameIsValid = true;
  }
});

//mail validation
formMail.addEventListener('change', function (e){
  let mailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  if (mailRegExp.test(e.target.value) == false)
  {
    formError(mailErrorMsg, "error-mail", "visible");
  }
  else {
    formError(mailErrorMsg, "error-mail", "hidden");
    mailIsValid = true;
  }
});

//birth date validation
formBirth.addEventListener('change', function (e){
let now = new Date();
let date = e.target.value;
let nowParse = Date.parse(now);
let dateParse = Date.parse(e.target.value);
if (date == null || dateParse > nowParse){
    formError(dateErrorMsg, "error-birth", "visible");
  }
  else {
    formError(dateErrorMsg, "error-birth", "hidden");
    dateIsValid = true;
  }
});

//tournament validation
formTournament.addEventListener('input', function(e) {
  if(e.target.value == null || e.target.value == "") {
    formError(tournamentErrorMsg, "error-condition", "visible");
  }
  else {
    formError(tournamentErrorMsg, "error-condition", "hidden");
    tournamentIsValid = true;
  }
});

//checkbox validation
 for (let i = 0; i < formCheck.length; i++) {
    formCheck[i].addEventListener("change", () =>{ 
      if (formCheck[i].checked == true){
        checkIsValid = true;
        formError(dateErrorMsg, "error-birth", "hidden");
      } else {
        formError (checkErrorMsg, "error-check", "visible");
      }});
    }

//conditions validation
formCondition.addEventListener('change', function (e) {
  if(!e.checked) { 
    formError(nameErrorMsg, "error-condition", "visible");
    conditionIsValid = false;
  }
  else{
    formError(nameErrorMsg, "error-condition", "hidden");
  }
});

//form submitting
modalbg.addEventListener("submit", validate); 
function validate(e) {
  // Valid Form
  if (fnameIsValid && lnameIsValid && mailIsValid && dateIsValid && tournamentIsValid && checkIsValid){
   alert("Merci ! Votre réservation a été reçue.");
  }
  // Form Error after submit
  else{
    e.preventDefault();
    if (!fnameIsValid) {formError (nameErrorMsg, "error-first", "visible")};
    if (!lnameIsValid) {formError (nameErrorMsg, "error-last", "visible")};
    if (!mailIsValid) {formError (mailErrorMsg, "error-mail", "visible")};
    if (!dateIsValid) {formError (dateErrorMsg, "error-birth", "visible")};
    if (!checkIsValid) {formError (checkErrorMsg, "error-check", "visible")};
    if (!tournamentIsValid) {formError(tournamentErrorMsg, "error-condition", "visible")};
  }
};



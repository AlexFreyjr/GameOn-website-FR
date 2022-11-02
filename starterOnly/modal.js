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
const errorMsg = document.querySelector(".error");
const formName = document.getElementById("first");
const formSurname = document.getElementById("last");
const formMail = document.getElementById("email");
const formBirth = document.getElementById("birthdate");
const formTournament = document.getElementById("quantity");
const submitBtn = document.querySelector(".btn-submit");
const nameIsValid = false;
const mailIsValid = false;
const dateIsValid = false;

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

//name validation
formName.addEventListener('change', nameVerification);
formSurname.addEventListener('change', nameVerification);
function nameVerification (e){
  if(e.target.value.length < 2 ) { 
    errorMsg.inner = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else{
    nameIsValid = true;
  }
}
//mail validation
formMail.addEventListener('change', mailVerification);
function mailVerification (e){
  let mailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  if (mailRegExp.test(e.target.value) == false)
  {
    alert("L'adresse mail n'est pas valide.")
  }
  else {
    mailIsValid = true;
  }
}
formBirth.addEventListener('change', birthVerification);
function birthVerification (e){
//check is a valid date
}

//participation validation
formTournament.addEventListener('change', tournamentValidation)
function tournamentValidation (e){
  if(e.target.value === null || e.target.value === "" ) { 
    alert("Veuillez entrer un nombre");
  }
}

//check radio 



//form submitting
submitBtn.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  if (nameIsValid && mailIsValid && dateIsValid){
    alert("Merci ! Votre réservation a été reçue.")
  }
  else{
    alert("please correct")
  }
});



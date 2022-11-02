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
const formCheck = document.querySelectorAll(".checkbox-input");;
let nameIsValid = 0;
let mailIsValid = false;
let dateIsValid = false;
let tournamentIsValid = false;
let checkIsValid = 0;

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
formName.addEventListener('change', fnameVerification);
function fnameVerification (e){
  if(e.target.value.length < 2 ) { 
    document.querySelector(".error-first").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else{
    document.querySelector(".error-first").style.visibility = "hidden";
    nameIsValid += 1;
  }
}
formSurname.addEventListener('change', lnameVerification);
function lnameVerification (e){
  if(e.target.value.length < 2 ) { 
    document.querySelector(".error-last").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else{
    document.querySelector(".error-last").style.visibility = "hidden";
    nameIsValid += 1;
  }
}
//mail validation
formMail.addEventListener('change', mailVerification);
function mailVerification (e){
  let mailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  if (mailRegExp.test(e.target.value) == false)
  {
    document.querySelector(".error-mail").innerHTML = "Veuillez entrer une adresse mail valide.";
  }
  else {
    document.querySelector(".error-mail").style.visibility = "hidden";
    mailIsValid = true;
  }
}
formBirth.addEventListener('change', birthVerification);
function birthVerification (e){
  let now = new Date();
  let date = e.target.value;
  //let age = now.getFullYear() - date.getFullYear();
  if (date == null || date > now){
    document.querySelector(".error-birth").innerHTML = "Vous devez entrer votre date de naissance.";
  }
  else {
    document.querySelector(".error-birth").style.visibility = "hidden";
    dateIsValid = true;
  }
}

//participation validation
formTournament.addEventListener('change', tournamentValidation);
function tournamentValidation (e){
  console.log(e);
  if(e.target.value == null || e.target.value == " " ) { 
    document.querySelector(".error-tournament").innerHTML = "Vous devez choisir une option.";
  }
  else {
    tournamentIsValid = true;
    document.querySelector(".error-tournament").style.dvisibility = "hidden";
  }
}

//check radio 
//for i in formCheck {
//  if(i.isChecked) {
//    if(i == 0) { checkIsValid += 1;}
//    else { document.querySelector(".error-checkbox").innerHTML = "Vous devez choisir une seule option.";}
//}
// else { document.querySelector(".error-checkbox").innerHTML = "Vous devez choisir une seule option.";}
//}


//form submitting
modalbg.addEventListener("submit", validate); 
function validate(e) {
  e.preventDefault();
  if (nameIsValid == 2 && mailIsValid == true && dateIsValid == true && tournamentIsValid == true){
    alert("Merci ! Votre réservation a été reçue.");
  }
  else{
    alert("Merci de remplir correctement le formulaire");
  }
};



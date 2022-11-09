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
const validModal = document.querySelector(".valid-modal");
const closeValidModal = document.querySelector(".btn-close");
const closeValidBtn = document.querySelector(".valid-close");

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
modalBtn.forEach((btn) => btn.addEventListener("click", function (e){
  modalbg.style.display = "block";
}));

// close modal event
closeBtn.addEventListener("click", closeModal);
function closeModal(){
  modalbg.style.display = "none";
}

// Error message
function formError(text, el, visibility) {
  document.querySelector(`.${el}`).style.visibility = visibility;
  document.querySelector(`.${el}`).innerText = text;
}
//add red border
function redBorder(el) {
  el.style.border = "1px solid #FF4E60";
}

//ERROR HANDLING (is the same for every case) :
//if the test is KO add a red border and error message.

//VALIDATION (is the same for every case)
//if test is valid then hide error message and pass true to global variables

//First name validation
formName.addEventListener("input", function (e) {
//Listen to every user input if input is less 2 character 
  if (e.target.value.length < 2) {
    //ERROR HANDLING
    redBorder(formName);
    formError(nameErrorMsg, "error-first", "visible");
  } else {
    //VALIDATION
    formError(nameErrorMsg, "error-first", "hidden");
    fnameIsValid = true;
  }
});
//same thing as first name but for last name
formSurname.addEventListener("input", function (e) {
  if (e.target.value.length < 2) {
    redBorder(formSurname);
    formError(nameErrorMsg, "error-last", "visible");
  } else {
    formError(nameErrorMsg, "error-last", "hidden");
    lnameIsValid = true;
  }
});

//Mail validation 
formMail.addEventListener("change", function (e) {
  //check if it's a valid mail format but only after the user select another input
  let mailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  if (mailRegExp.test(e.target.value) == false) {
    redBorder(formMail);
    formError(mailErrorMsg, "error-mail", "visible");
  } else {
    formError(mailErrorMsg, "error-mail", "hidden");
    mailIsValid = true;
  }
});

//birth date validation
formBirth.addEventListener("change", function (e) {
  //get the actual date
  let now = new Date();
  let date = e.target.value;
  //parse the two date (get the date but in seconds)
  let nowParse = Date.parse(now);
  let dateParse = Date.parse(e.target.value);
  //if date is empty or user input date is superior than the actual date
  if (date == null || dateParse > nowParse) {
    redBorder(formBirth);
    formError(dateErrorMsg, "error-birth", "visible");
  } else {
    formError(dateErrorMsg, "error-birth", "hidden");
    dateIsValid = true;
  }
});

//tournament validation
formTournament.addEventListener("input", function (e) {
  //check if the input is empty
  if (e.target.value == null || e.target.value == "") {
    redBorder(formTournament);
    formError(tournamentErrorMsg, "error-condition", "visible");
  } else {
    formError(tournamentErrorMsg, "error-condition", "hidden");
    tournamentIsValid = true;
  }
});

//checkbox validation
//loop to every checkbox
for (let i = 0; i < formCheck.length; i++) {
  //listen to every change to the checkbox
  formCheck[i].addEventListener("change", () => {
    //if any is checked than pass true to global variables
    if (formCheck[i].checked == true) {
      checkIsValid = true;
      formError(dateErrorMsg, "error-check", "hidden");
    } else {
      formError(checkErrorMsg, "error-check", "visible");
    }
  });
}

//conditions validation
formCondition.addEventListener("change", function (e) {
  //Since the box is already check, it listen to any difference the pass false to the global variable.
  if (!e.checked) {
    formError(nameErrorMsg, "error-condition", "visible");
    conditionIsValid = false;
  } else {
    formError(nameErrorMsg, "error-condition", "hidden");
  }
});

//form submitting
modalbg.addEventListener("submit", validate);
function validate(e) {
  // check every global variables
  if (
    fnameIsValid &&
    lnameIsValid &&
    mailIsValid &&
    dateIsValid &&
    tournamentIsValid &&
    checkIsValid
  ) {
    e.preventDefault();
    //launch the validation modal
    validModal.style.display = "block";
    closeValidModal.addEventListener("click", function (e){
      validModal.style.display = "none";
      closeModal();
    });
    closeValidBtn.addEventListener("click", function (e){
      validModal.style.display = "none";
      closeModal();
    });
  }
  //if they're any error highlight with border and add error message
  else {
    e.preventDefault();
    if (!fnameIsValid) {
      redBorder(formName);
      formError(nameErrorMsg, "error-first", "visible");
    }
    if (!lnameIsValid) {
      redBorder(formSurname);
      formError(nameErrorMsg, "error-last", "visible");
    }
    if (!mailIsValid) {
      redBorder(formMail);
      formError(mailErrorMsg, "error-mail", "visible");
    }
    if (!dateIsValid) {
      redBorder(formBirth);
      formError(dateErrorMsg, "error-birth", "visible");
    }
    if (!tournamentIsValid) {
      redBorder(formTournament);
      formError(tournamentErrorMsg, "error-tournament", "visible");
    }
    if (!checkIsValid) {
      formError(checkErrorMsg, "error-check", "visible");
    }
  }
}

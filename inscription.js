const form = document.getElementById("inscriptionForm");

const nom = document.getElementById("nom");
const telephone = document.getElementById("telephone");
const adresse = document.getElementById("adresse");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const nomError = document.getElementById("nomError");
const telephoneError = document.getElementById("telephoneError");
const adresseError = document.getElementById("adresseError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    nomError.textContent = "";
    telephoneError.textContent = "";
    adresseError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let valide = true;


    if (nom.value.trim() === "") {
        nomError.textContent = "Veuillez entrer votre nom complet.";
        valide = false;
    }


    if (telephone.value.trim() === "") {
        telephoneError.textContent = "Veuillez entrer votre numéro de téléphone.";
        valide = false;
    }


    if (adresse.value.trim() === "") {
        adresseError.textContent = "Veuillez entrer votre adresse.";
        valide = false;
    }


    if (password.value.trim() === "") {
        passwordError.textContent = "Veuillez entrer votre mot de passe.";
        valide = false;
    } 
    else if (password.value.length < 6) {
        passwordError.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
        valide = false;
    }


    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Veuillez confirmer votre mot de passe.";
        valide = false;
    } 
    else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Les mots de passe ne correspondent pas.";
        valide = false;
    }


    if (valide) {
        window.location.href = "verifications.html";
    }

});
const passwordForm = document.getElementById("passwordForm");

const newPassword = document.getElementById("new-password");
const confirmPassword = document.getElementById("confirm-password");

const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


passwordForm.addEventListener("submit", function (event) {

    event.preventDefault();

    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let valide = true;


    if (newPassword.value.trim() === "") {

        passwordError.textContent =
            "Veuillez entrer votre nouveau mot de passe.";

        valide = false;

    } 
    else if (newPassword.value.length < 6) {

        passwordError.textContent =
            "Le mot de passe doit contenir au moins 6 caractères.";

        valide = false;
    }


    if (confirmPassword.value.trim() === "") {

        confirmPasswordError.textContent =
            "Veuillez confirmer votre mot de passe.";

        valide = false;

    } 
    else if (newPassword.value !== confirmPassword.value) {

        confirmPasswordError.textContent =
            "Les mots de passe ne correspondent pas.";

        valide = false;
    }


    if (valide) {

        window.location.href = "connexion.html";

    }

});
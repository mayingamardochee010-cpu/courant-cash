const form = document.getElementById("forgotForm");
const telephone = document.getElementById("telephone");
const telephoneError = document.getElementById("telephoneError");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    telephoneError.textContent = "";

    const numero = telephone.value.trim();

    if (numero === "") {
        telephoneError.textContent = "Veuillez entrer votre numéro de téléphone.";
        return;
    }

    const numeroValide = /^(?:\+243|0)(?:8|9)[0-9]{8}$/.test(numero);

    if (!numeroValide) {
        telephoneError.textContent = "Veuillez entrer un numéro de téléphone valide.";
        return;
    }

    window.location.href = "verification.html";
});
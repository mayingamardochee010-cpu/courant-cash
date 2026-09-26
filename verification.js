const verificationForm = document.getElementById("verificationForm");

const otpInputs = document.querySelectorAll(".otp-input");
const otpError = document.getElementById("otpError");


// Passage automatique à la case suivante

otpInputs.forEach((input, index) => {

    input.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9]/g, "");

        if (
            this.value !== "" &&
            index < otpInputs.length - 1
        ) {
            otpInputs[index + 1].focus();
        }

    });


    // Retour à la case précédente

    input.addEventListener("keydown", function (event) {

        if (
            event.key === "Backspace" &&
            this.value === "" &&
            index > 0
        ) {
            otpInputs[index - 1].focus();
        }

    });

});


// Vérification du code

verificationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    otpError.textContent = "";

    let codeComplet = "";

    otpInputs.forEach(function (input) {
        codeComplet += input.value;
    });


    if (codeComplet.length < 6) {

        otpError.textContent =
            "Veuillez entrer les 6 chiffres du code.";

        return;
    }


    window.location.href = "nouveau mot de passe.html";

});


// Renvoi du code

const resendCode = document.getElementById("resendCode");
const resendMessage = document.getElementById("resendMessage");

let countdown = 30;
let timer;

resendCode.addEventListener("click", function (event) {

    event.preventDefault();

    if (resendCode.classList.contains("disabled")) {
        return;
    }

    resendMessage.textContent =
        "Un nouveau code a été demandé.";

    resendCode.classList.add("disabled");

    countdown = 30;

    resendCode.textContent =
        "Renvoyer le code (" + countdown + "s)";


    timer = setInterval(function () {

        countdown--;

        resendCode.textContent =
            "Renvoyer le code (" + countdown + "s)";


        if (countdown <= 0) {

            clearInterval(timer);

            resendCode.classList.remove("disabled");

            resendCode.textContent =
                "Renvoyer le code";

            resendMessage.textContent = "";

        }

    }, 1000);

});
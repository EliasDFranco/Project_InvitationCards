
function confirmarasistencia(event) {
    event.preventDefault();

    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;

    var msj = "Hola mi nombre es: " + name + ", quiero confirmar mi asistencia a la boda. Mi correo electrónico es: "+ email + ".";

    var myNumber = "595983259045";

    var urlWhatsApp = "https://wa.me/" + myNumber + "?text=" + encodeURIComponent(msj);

    window.location.href = urlWhatsApp;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("confirmation-form").addEventListener("submit", confirmarasistencia);
});



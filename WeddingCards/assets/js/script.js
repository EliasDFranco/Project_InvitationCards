function countdown() {
    const weddingDate = new Date("Febrero 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = weddingDate - now;

    const second= 1000, minute= second * 60, hour = minute * 60, day = hour * 24; 

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor ((gap % hour) / minute);
    const seconds = Math.floor ((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    countdown();
    setInterval(countdown, 1000);

    const form = document.getElementById("confirmation-form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("¡Muchas gracias por confirmar tu asistencia!");
        form.reset();
    });
}  
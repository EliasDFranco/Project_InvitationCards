document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("musicromantic");
    const button = document.querySelector(".music-button");

    button.addEventListener("click", toggleMusic);

    function toggleMusic(){
        console.log("Botón presionado");
        if(audio.paused) {
            audio.play();
            button.textContent = "❚❚ Pause";
            button.classList.add("playing");
        } else {
            audio.pause();
            button.textContent = " ♫ Play ♫ ";
            button.classList.remove("playing");
        }
    }     
});

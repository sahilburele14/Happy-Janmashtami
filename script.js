const screen = document.getElementById("screen");
const startBtn = document.getElementById("startBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const soundBtn = document.getElementById("soundBtn");
const particles = document.getElementById("particles");

const countdown = document.getElementById("countdown");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const celebrationMessage =
    document.getElementById("celebrationMessage");



// Start Celebration button
startBtn.addEventListener("click", () => {

    // Enable video sound
    screen.muted = false;

    // Start video
    screen.play()
        .then(() => {

            // Hide welcome screen
            welcomeScreen.classList.add("hide");

            // Start countdown
            startCountdown(); 

            // Completely remove it after fade animation
            setTimeout(() => {
                welcomeScreen.style.display = "none";
            }, 800);

        })
        .catch((error) => {

            console.log("Video could not start:", error);

        });

});



// Sound On / Off button

soundBtn.addEventListener("click", () => {

    screen.muted = !screen.muted;

    if (screen.muted) {

        soundBtn.textContent = "🔇 Sound Off";

    } else {

        soundBtn.textContent = "🔊 Sound On";

    }

});


//Particles
function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const symbols = ["🌸", "🌼", "✨", "🪷"];

    const randomSymbol =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.textContent = randomSymbol;

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        Math.random() * 15 + 20 + "px";

    particle.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    particles.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 8000);

}


setInterval(createParticle, 700);



// Countdown functionality

const targetDate = new Date("2026-09-05T00:00:00");

let countdownInterval = null;

function updateCountdown() {

    const now = new Date();

    const difference = targetDate - now;


    // Countdown finished

    if (difference <= 0) {

        countdown.style.display = "none";

        celebrationMessage.classList.add("show");

        clearInterval(countdownInterval);

        return;
    }


    // Calculate time

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Display time

    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}




function startCountdown() {

    countdown.style.display = "block";

    updateCountdown();

    countdownInterval =
        setInterval(updateCountdown, 1000);
}

const timer = document.getElementById("timer")
const startBtn = document.getElementById("startBtn")

let time = 10;
let interval;

function updateTimerDisplay() {
    minutes = Math.floor(time/60);
    seconds = time % 60;

    if (minutes < 10) {
        minutes = "0" + minutes ;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

timer.textContent= `${minutes}:${seconds}`
}

startBtn.addEventListener("click", () => {
    clearInterval(interval);
    time = 10;

    updateTimerDisplay();

    interval = setInterval(()=>{
        time--;
        updateTimerDisplay();

        if (seconds <= 0) {
            clearInterval(interval);
            timer.textContent = "Time's up";
        }


    },1000);
})
const start = document.querySelector('#start');
start.addEventListener("click", handleStartClick);

const clicker = document.querySelector('.clicker');
clicker.addEventListener("click", handleClickerClick);

const scoreDisplay = document.querySelector("span");

let score = 0;
let highscore = 0;

function handleStartClick() {
    console.log(`starting!`);
}

function handleClickerClick() {

    score++;
    scoreDisplay.textContent = score;
    console.log(`Click ${score}`);


}
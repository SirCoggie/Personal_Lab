const start = document.querySelector('#start');
start.addEventListener("click", handleStartClick);

const clicker = document.querySelector('.clicker');
clicker.addEventListener("click", handleClickerClick);

const scoreDisplay = document.querySelector("span");

let score = 0;
let highscore = 0;
let GameState = false;



function handleStartClick() {
    if (GameState === false) {
        GameState = true;
        console.log(`starting!`);
    }
    else {
        console.log('Game is already turned ON!')
    }
}

function handleClickerClick() {

    if (GameState === true) {
        score++;
        scoreDisplay.textContent = score;
        console.log(`Click ${score}`);
    }
    else {
        console.log('Game has not turned on yet!')
    }

}
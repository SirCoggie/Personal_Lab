const start = document.querySelector('#start');
start.addEventListener("click", handleStartClick);

const clicker = document.querySelector('.clicker');
clicker.addEventListener("click", handleClickerClick);

const scoreDisplay = document.querySelector("#score");

const InstructionDisplay = document.querySelector("#instruction");

let score = 0;
let highscore = 0;
let GameState = false;
let ButtonColor = false;

function ButtonColorFunc() {
        clicker.classList.toggle("active");
        ButtonColor = !ButtonColor; // flips the button true/false
}



function handleStartClick() {
    if (GameState === false) {
        GameState = true;
        score = 0;
        scoreDisplay.textContent= score;
        console.log(`starting!`);
        InstructionDisplay.textContent = "Press the Button when its red!"
    }
    else {
        console.log(`Game is already turned ON!`)
        InstructionDisplay.textContent = "Its the 'Click Me' button you have to press!"
    }
}

function handleClickerClick() {
    if (!GameState) {
        console.log("Game not started!");
        return;
    }

    if (ButtonColor === true) {
        score++;
        scoreDisplay.textContent = score;
        InstructionDisplay.textContent = "Good Job!";
    } else {
        InstructionDisplay.textContent = "You Lost!";

        if (score > highscore) {
            highscore = score;
            console.log(`New Highscore: ${highscore}`)
        }
        GameState = false;

        clearInterval(intervalID);

        InstructionDisplay.textContent = "Game Over! Press Start again to play again!"
    }









}
    //{     if (GameState === true) {
//         setInterval(ButtonColorFunc, 3000)

//         if (ButtonColor === true & handleClickerClick()) {
//             score++;
//             scoreDisplay.textContent = score;
//             console.log(`Click ${score}`);
            
//         }

//         if (ButtonColor === false & handleClickerClick()) {
//             for (let i = 0; i < 3; i++) {
//                 InstructionDisplay.textContent = "You lost";
//         }
//             highscore = score;
//             console.log(`Higscore is ${highscore}`);
//             GameState = false
//              InstructionDisplay.textContent = "Press the Start Button!"

//         }



//     }
//     else {
//         console.log('Game has not turned on yet!')
//     }

// }
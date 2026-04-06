const start = document.querySelector('#start');
start.addEventListener("click", handleStartClick);

const clicker = document.querySelectorAll('.clicker');
// Add an EventListener to all buttons and use a foreach 
clicker.forEach((button)=>{
button.addEventListener("click", handleClickerClick)
});

const scoreDisplay = document.querySelector("#score");

const InstructionDisplay = document.querySelector("#instruction");

let score = 0;
let highscore = 0;
let GameState = false;
let ButtonColor = false;
let timeoutID = null;

function TimeRandom(min,max) {
    return Math.random() * (max - min) + min;
};


// Remove the red color from all buttons
function clearButtons(){
    clicker.forEach((button)=>{
        button.classList.remove("active")
    })
};


//this only activate one button when there is multiple buttons causing error
    //need to use array to call 1 random button among the 3 buttons to activate

function ButtonColorFunc(){
    clearButtons();

    const RandomChoice = Math.floor(Math.random * clicker.length) + 1;
    const chosenButton = clicker[RandomChoice]
    chosenButton.classList.toggle("active");

    ButtonColor = !ButtonColor; // flips the button true/false
}



function startColorLoop() {
   const randomTime = TimeRandom(3000, 10000);
   timeoutID = setTimeout(()=>{
    if (!GameState) return;

    ButtonColorFunc();
    startColorLoop();
   }, randomTime);
} 

function handleStartClick() {
    if (GameState === false) {
        GameState = true;
        score = 0;
        ButtonColor = false;

        // why remove active from clicker when active is not assigned in the first place during start
        clicker.classList.remove("active") 

        scoreDisplay.textContent= score;
        console.log(`starting!`);
        InstructionDisplay.textContent = "Press the Button when its red!";
        startColorLoop()
        // setInterval(ButtonColorFunc, TimeRandom(3000,10000));
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

        clearTimeout(timeoutID);

        InstructionDisplay.textContent = "Game Over! Press Start again to play again!"
    }
}
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
function newSequence() {
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    level ++;
    gamePattern.push(randomChosenColor);
    playSound (randomChosenColor);
    document.querySelector("#" + randomChosenColor).classList.add("pressed");
    setTimeout(function () {
    document.querySelector("#" + randomChosenColor).classList.remove("pressed");
    }, 300);
    document.querySelector("h1").textContent = ("Level " + level);
}
document.querySelectorAll(".btn").forEach(function(pressed) {
    pressed.addEventListener("click", function () {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    document.querySelector("#" + userChosenColor).classList.add("pressed");
    setTimeout(function () {
    document.querySelector("#" + userChosenColor).classList.remove("pressed");
    }, 100);
    checkAnswer(userClickedPattern.length - 1);
    });
});
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
document.body.addEventListener("keypress", function () {
    if (!started) {
        newSequence();
        started = true;
    }
});
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                newSequence();
            }, 1000); 
        }
    }
    else {
        let wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        document.body.classList.add("game-over");
        setTimeout(function () {
            document.body.classList.remove("game-over");
        }, 200);
        document.querySelector("h1").textContent = ("Game Over, Press any key to restart.");
        startOver();
    }
}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
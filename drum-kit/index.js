for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonPress = this.innerHTML;
        playSound(buttonPress);
        buttonAnimation(buttonPress);
    });
}
    addEventListener("keypress", function(press) {
        playSound(press.key);
        buttonAnimation(press.key);
});
function playSound(name) {
    let audio = new Audio("sounds/" + name +".mp3");
    audio.play();
}
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", () => {
        playSound(button.innerHTML);
        buttonAnimation(button.innerHTML);
    });
})
document.addEventListener("keypress", (press) => {
    playSound(press.key);
    buttonAnimation(press.key);
});
let soundMap = {
    w:"crash",
    a:"kick-bass",
    s:"snare",
    d:"tom-1",
    j:"tom-2",
    k:"tom-3",
    l:"tom-4",
}
function playSound(key) {
    let audio = new Audio("sounds/" + soundMap[key] + ".mp3");
    audio.play();
}
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100)
}
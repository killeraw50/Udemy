let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomDiceFace = "dice" + randomNumber + ".png";
let randomDiceImage = "images/" + randomDiceFace;
document.querySelector(".img1").setAttribute("src", "randomDiceImage");
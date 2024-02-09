console.log("Hello Every Vistors");
// small JavaScript Project:
var counter = document.getElementById("count");
var decreaseButton = document.getElementById("decreaseButton");
var increaseButton = document.getElementById("increaseButton");
var resetButton = document.getElementById("resetButton");

decreaseButton.addEventListener("click", function chageFont() {
    var count = counter.innerText;
    count = parseInt(count) - 1;
    counter.textContent = count;
})

increaseButton.addEventListener("click", function onIncrease() {
    var count = counter.innerText;
    count = parseInt(count) + 1;
    counter.innerText = count;
})

resetButton.addEventListener("click", function onReset() {
    var count = counter.innerText;
    count = 0;
    counter.innerText = "0";
})

// Guess Game:
let guessedNum = document.getElementById("guessNum");
let randomNumber = Math.ceil(Math.random() * 100);
let guess = document.getElementById("guessNum").value;

function checkNum() {
    let guessedNumber = parseInt(guessedNum.value);
    if (guess === "") {
        document.getElementById("messagePara").innerText = "Give Some inputs!";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else if (randomNumber < guessedNumber) {
        document.getElementById("messagePara").innerText = "Too High, Try Again";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else if (randomNumber > guessedNumber) {
        document.getElementById("messagePara").innerText = "Too Low, Try Again";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else {
        document.getElementById("messagePara").innerHTML = "Congratulation, Right Guess!";
        document.getElementById("messagePara").style.backgroundColor = "yellow";
        document.getElementById("messagePara").style.fontWeight = "bold";


    }


}

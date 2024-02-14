console.log("Hello Every Vistors");
// small JavaScript Project:
var img = document.getElementById("puppyImage");
var button = document.getElementById("likeButton");
var font = document.getElementById("likeIcon");
let is_clicked = false;

function onClickLikeButton() {
    if (is_clicked === false) {
        img.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        button.style.color = "#ffffff";
        button.style.background = "#0967d2";
        font.style.color = "#0967d2";
        is_clicked = true;
    } else {
        img.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        button.style.color = "#9aa5b1";
        button.style.background = "#cbd2d9";
        font.style.color = "#cbd2d9";
        is_clicked = false;
    }
}

// Guess Game:
let guessedNum = document.getElementById("guessNum");
let randomNumber = Math.ceil(Math.random() * 100);
let guess = document.getElementById("guessNum").value;

function checkNum() {
    let guessedNumber = parseInt(guessedNum.value);
    if (randomNumber < guessedNumber) {

        document.getElementById("messagePara").innerText = "Too High, Try Again";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else if (randomNumber > guessedNumber) {

        document.getElementById("messagePara").innerText = "Too Low, Try Again";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else if (randomNumber === guessedNumber) {
        document.getElementById("messagePara").innerHTML = "Congratulation, Right Guess!";
        document.getElementById("messagePara").style.backgroundColor = "yellow";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else {

        document.getElementById("messagePara").innerText = "Give Some inputs!";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";

    }


}

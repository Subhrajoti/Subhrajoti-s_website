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

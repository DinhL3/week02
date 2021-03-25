setTimeout(function () {
    document.getElementById("change-text").innerHTML = "Already Changed!"
}, 3000)

let count = 0

setInterval(function () {
    count++
    document.getElementById("change-count").innerHTML = count
}, 1000)

setInterval(function () {
    const cssColorNames = ["Red", "Blue", "Green", "Yellow", "Cyan", "Magenta"]
    random = Math.floor(Math.random() * cssColorNames.length)
    document.getElementById("change-color").style.backgroundColor = cssColorNames[random]
    document.getElementById("change-color").innerHTML = cssColorNames[random]
}, 3000)

let clickCount = 0;

document.getElementById("change-click").addEventListener("click", function () {
    clickCount++;
    document.getElementById("change-click").innerHTML = clickCount;
});
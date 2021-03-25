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

let hoverCount = 0;

document.getElementById("change-hover").addEventListener("mouseover", function () {
    hoverCount++;
    document.getElementById("change-hover").innerHTML = hoverCount;
});

let lovesMe = 0;

document.getElementById("change-he-loves-me").addEventListener("click", function () {
    lovesMe++;
    if (lovesMe % 2) {
        document.getElementById("change-he-loves-me").innerHTML = "He Loves Me";
    } else {
        document.getElementById("change-he-loves-me").innerHTML = "He Loves Me Not";
    }
});

document.getElementById("change-to-current-date").addEventListener(
    "click", function () {
        const d = new Date();
        document.getElementById("change-to-current-date").innerHTML = d;
    }
);

function reportSize() {
    // window = viewport
    const width = window.innerWidth;
    document.getElementById("change-to-current-width").innerHTML =
        "Width: " + width;
    const height = window.innerHeight;
    document.getElementById("change-to-current-height").innerHTML =
        "Height: " + height;
}
// onresize is an event
window.onresize = reportSize;

let listLength = 0;

document.getElementById("add-list-item").addEventListener("click",
    function () {
        listLength++
        // To create a li, you must create both a li node and a text node
        //Check this for full combo: https://www.w3schools.com/jsref/met_node_appendchild.asp
        let linode = document.createElement("li")
        let textnode = document.createTextNode("This is a new li element number " + listLength)
        linode.appendChild(textnode)

        let elementTarget = document.getElementById("add-list-item")
        elementTarget.appendChild linode)
    }
);
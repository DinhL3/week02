// Variables
let myMoney = 100

let cardDeck = [] //blank before
let suits = ["spades", "clubs", "diams", "hearts"]
let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let count = 0


let message = document.getElementById('message')
let cardOutput = document.getElementById("card-table")



function gameStart() {
    message.innerHTML = "Good luck!"
    document.getElementById('start-div').style.display = 'none'
    document.getElementById("highlow-div").style.display = 'block'
    buildCards()
    shuffleArray(cardDeck);
    cardOutput.innerHTML += showCard() //push the return of showCard() to the inside of 
}



// To create the card deck in order for the first time
function buildCards() {
    cardDeck = []//clear array
    for (suitsIndex in suits) {
        let suitFirstLetter = suits[suitsIndex][0].toUpperCase()
        for (numbersIndex in numbers) {
            let card = {
                suit: suits[suitsIndex],
                num: numbers[numbersIndex],
                cardValue: parseInt(numbersIndex) + 2,
                icon: suitFirstLetter
            }
            cardDeck.push(card)
        }
    }
    console.log(cardDeck)
}

// This entire function is a "How to shuffle an array" exercise
function shuffleArray(array) {
    for (let index = array.length - 1; index > 0; index--) {
        let randomIndex = Math.floor(Math.random() * (index + 1))
        let temp = array[index]
        array[index] = array[randomIndex]
        array[randomIndex] = temp
    }
    return array;
}

function showCard() {
    let c = cardDeck[count]
    let bgColor = (c.icon == "H" || c.icon == "D") ? "red" : "black"
    // use template literals to work with styles
    return `<span class="card-design" style="color:${bgColor}">` + c.num + " &" + c.suit + ";</div>"
}

function hiLo(input) {
    count++
    // calculate winner
    cardOutput.innerHTML += showCard();
}
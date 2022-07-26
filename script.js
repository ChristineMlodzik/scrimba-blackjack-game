let player = { 
    name: "Christine",
    bet: 750
}

let cards = [];

let sum = 0;

let hasBlackjack = false;

let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + "'$ Bet:" + " " + "$" + player.bet;

function getRandomCard() {
    let randomCard = Math.floor( Math.random()*13 ) + 1;
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    } 
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame() 
}

function renderGame() {
    cardsEl.textContent = "Card$:" + " "
        for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ♣️ ";
    }

    sumEl.textContent = "$um:" + " " + sum;
    if (sum < 21) {
        message = "Do You Want Another Card?";
    } else if (sum === 21) {
        message = "Blackjack!";
        hasBlackjack = true;
    } else {
        message = "$orry, You Lose.";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let anotherCard = getRandomCard();
        sum += anotherCard;
        cards.push(anotherCard);
        renderGame();
    }
}


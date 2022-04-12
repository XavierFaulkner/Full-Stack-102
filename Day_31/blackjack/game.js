let deck = [
    ["A", "s", 11], ["2", "s", 2], ["3", "s", 3], ["4", "s", 4], ["5", "s", 5], ["6", "s", 6], ["7", "s", 7], ["8", "s", 8], ["9", "s", 9], ["10", "s", 10], ["J", "s", 10], ["Q", "s", 10], ["K", "s", 10],
    ["A", "h", 11], ["2", "h", 2], ["3", "h", 3], ["4", "h", 4], ["5", "h", 5], ["6", "h", 6], ["7", "h", 7], ["8", "h", 8], ["9", "h", 9], ["10", "h", 10], ["J", "h", 10], ["Q", "h", 10], ["K", "h", 10],
    ["A", "d", 11], ["2", "d", 2], ["3", "d", 3], ["4", "d", 4], ["5", "d", 5], ["6", "d", 6], ["7", "d", 7], ["8", "d", 8], ["9", "d", 9], ["10", "d", 10], ["J", "d", 10], ["Q", "d", 10], ["K", "d", 10],
    ["A", "c", 11], ["2", "c", 2], ["3", "c", 3], ["4", "c", 4], ["5", "c", 5], ["6", "c", 6], ["7", "c", 7], ["8", "c", 8], ["9", "c", 9], ["10", "c", 10], ["J", "c", 10], ["Q", "c", 10], ["K", "c", 10]
]

let dealt = [];

let coins = 1000;
let wager = 0;
let playerTotal = 0;
let hide = true;

deck = shuffleDeck(deck);

const playerCardsHTML = document.getElementById('playerCards');
const dealerCardsHTML = document.getElementById('dealerCards');
const numOfActive = document.getElementById('numOfActive');
const numOfDealt = document.getElementById('numOfDealt');
const numOfCoins = document.getElementById('numOfCoins');
const wagerButtons = document.getElementsByClassName('betToken');
const hitButton = document.getElementById('hit');
const stayButton = document.getElementById('stay');
const playerTotalHTML = document.getElementById('playerTotal');
const dealerTotalHTML = document.getElementById('dealerTotal');


const playerCards = [];
const playerCardsValues = [];
const dealerCards = [];
const dealerCardsValues = [];

function cardHTML() {
    cardInfo = getRandomCard();
    value = cardInfo[0];
    suit = cardInfo[1];
    card = document.createElement('div');
    card.innerHTML = 
    `
    <div class="card">
        <div id="top">
            <h2>${value}</h2>
        </div>
        <div id="middle">
            <img src="images/${suit}.png" width="50px">
        </div>
        <div id="bottom">
            <h2>${value}</h2>
        </div>
    </div>
    `
    return [card, cardInfo];
}

function getRandomCard() {
    let card = deck.pop(Math.floor(Math.random() * 52));
    numOfActive.innerText = deck.length;
    dealt.push(card);
    numOfDealt.innerText = dealt.length;
    return card;
}

//shuffle algorithm found here (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffleDeck(deck) {
    let currentIndex = deck.length, randomIndex;

    //while there are still cards to shuffle
    while(currentIndex != 0) {
        //pick a random card
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        //swap random card with current card
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }
    return deck;
}

function startGame(betAmount) {
    wager = betAmount;
    coins -= betAmount;
    numOfCoins.innerText = coins;
    for(let i = 0; i < wagerButtons.length; i++) {
        wagerButtons[i].setAttribute("disabled", "true");
    }
    givePlayerCard("player");
    givePlayerCard("dealer");
    givePlayerCard("player");
    givePlayerCard("dealer");
    //remove dealer's second card
    dealerCardsHTML.getElementsByClassName('card')[1].remove();
    //add a placeholder card
    let placeholderCard = document.createElement('div');
    placeholderCard.classList.add("cardPlaceholder");
    dealerCardsHTML.appendChild(placeholderCard);
    hitButton.disabled = false;
    stayButton.disabled = false;
}

function givePlayerCard(player) {
    if(player === "player") {
        let cardInformation = cardHTML();
        let newCard = cardInformation[0];
        playerCards.push(newCard);
        playerCardsValues.push(cardInformation[1]);
        playerCardsHTML.innerHTML = "";
        for(let i = 0; i < playerCards.length; i++) {
            playerCardsHTML.appendChild(playerCards[i]);
        }
        updateTotal(playerCardsValues, "player");
    } else {
        let cardInformation = cardHTML();
        let newCard = cardInformation[0];
        dealerCards.push(newCard);
        dealerCardsValues.push(cardInformation[1]);
        dealerCardsHTML.innerHTML = "";
        for(let i = 0; i < dealerCards.length; i++) {
            dealerCardsHTML.appendChild(dealerCards[i]);
        }
        updateTotal(dealerCardsValues, "dealer");
    }
}

function updateTotal(cards, player) {
    let total = 0;
    let length;
    if(hide && player == "dealer") {
        length = 1;
    } else {
        length = cards.length
    }
    //loop through and add all values that aren't an ace
    for(let i = 0; i < length; i ++) {
        if(cards[i][0] != "A") {
            total += cards[i][2];
        }
    }
    //loop through again and look for aces
    for(let i = 0; i < length; i ++) {
        if(cards[i][0] === "A") {
            if((total + cards[i][2]) > 21) {
                total += 1;
            } else {
                total += 11;
            }
        }
    }
    if(player == "player") {
        playerTotalHTML.innerText = total;
    } else {
        dealerTotalHTML.innerText = total;
    }
    return total;
}
let deck = [
    ["A", "s", 11], ["2", "s", 2], ["3", "s", 3], ["4", "s", 4], ["5", "s", 5], ["6", "s", 6], ["7", "s", 7], ["8", "s", 8], ["9", "s", 9], ["10", "s", 10], ["J", "s", 10], ["Q", "s", 10], ["K", "s", 10],
    ["A", "h", 11], ["2", "h", 2], ["3", "h", 3], ["4", "h", 4], ["5", "h", 5], ["6", "h", 6], ["7", "h", 7], ["8", "h", 8], ["9", "h", 9], ["10", "h", 10], ["J", "h", 10], ["Q", "h", 10], ["K", "h", 10],
    ["A", "d", 11], ["2", "d", 2], ["3", "d", 3], ["4", "d", 4], ["5", "d", 5], ["6", "d", 6], ["7", "d", 7], ["8", "d", 8], ["9", "d", 9], ["10", "d", 10], ["J", "d", 10], ["Q", "d", 10], ["K", "d", 10],
    ["A", "c", 11], ["2", "c", 2], ["3", "c", 3], ["4", "c", 4], ["5", "c", 5], ["6", "c", 6], ["7", "c", 7], ["8", "c", 8], ["9", "c", 9], ["10", "c", 10], ["J", "c", 10], ["Q", "c", 10], ["K", "c", 10]
]

let dealt = [];
let numDealt = 0;

let coins = 1000;
let wager = 0;
let winnings = 0;
let playerTotal = 0;
let dealerTotal = 0;
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
const audio = document.getElementById('audio');

let playerCards = [];
let playerCardsValues = [];
let dealerCards = [];
let dealerCardsValues = [];

const placeholderCard = document.createElement('div');
placeholderCard.classList.add("cardPlaceholder");

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
    //reshuffle the deck when cards run out
    if(deck.length < 1) {
        deck = dealt;
        deck = shuffleDeck(deck);
        dealt = [];
        numDealt = 0;
    }
    let card = deck.pop(Math.floor(Math.random() * 52));
    numOfActive.innerText = deck.length;
    numDealt++;
    numOfDealt.innerText = numDealt;
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
    audio.src = "./sounds/chips.wav";
    audio.play();
    wager = betAmount;
    coins -= betAmount;
    numOfCoins.innerText = coins;
    for(let i = 0; i < wagerButtons.length; i++) {
        wagerButtons[i].setAttribute("disabled", "true");
    }
    setTimeout(() => { 
        givePlayerCard("player");
        setTimeout(() => {
            givePlayerCard("dealer");
            setTimeout(() => {
                givePlayerCard("player");
                setTimeout(() => {
                    givePlayerCard("dealer");
                    //remove dealer's second card
                    dealerCardsHTML.firstElementChild.nextSibling.remove();
                    //add a placeholder card
                    dealerCardsHTML.appendChild(placeholderCard);
                    if(playerTotal < 21) {
                        hitButton.disabled = false;
                    }
                    stayButton.disabled = false;
                }, 500);
            }, 500);
        }, 500);
    }, 500);
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
        audio.src = "./sounds/cards.wav";
        audio.play();
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
        audio.src = "./sounds/cards.wav";
        audio.play();
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
        playerTotal = total;
    } else {
        dealerTotalHTML.innerText = "Dealer's Hand: " + total;
        dealerTotal = total;
    }
    return total;
}

hitButton.addEventListener('click', function(e) {
    audio.src = "./sounds/click.wav";
    audio.play();
    setTimeout(() => { 
        givePlayerCard("player");
        if(playerTotal >= 21) {
            hitButton.setAttribute("disabled", "true");
            stayButton.setAttribute("disabled", "true");
            setTimeout(() => {finish()}, 500);
        } else {
            return;
        }
    }, 500);
});

stayButton.addEventListener('click', function(e) {
    audio.src = "./sounds/click.wav";
    audio.play();
    hitButton.setAttribute("disabled", "true");
    stayButton.setAttribute("disabled", "true");
    setTimeout(() => {
        finish();
    }, 500);
});

function finish() {
    if(playerTotal > 21) {
        //Bust you lose create popup
        createPopup("bust");
        //reset game
    } else {
        //deal dealer's cards
        dealerPlay();
        //display winner and give payouts if needed
        setTimeout(() => {
            //determine payout
            if((playerTotal > dealerTotal && playerTotal < 21) || (playerTotal < 21 && dealerTotal > 21)) {
                winnings = wager*1.5;
                createPopup("win");
            } else if(playerTotal == dealerTotal && playerTotal < 21) {
                winnings = wager;
                createPopup("push");
            } else if(playerTotal == 21 && dealerTotal == 21) {
                winnings = wager*1.5;
                createPopup("blackjack");
            } else if(playerTotal == 21) {
                winnings = wager*2;
                createPopup("blackjack");
            } else {
                winnings = 0;
                createPopup("lost");
            }
        }, 1500);
    }
}

function dealerPlay() {
    //show second card
    hide = false;
    dealerCardsHTML.getElementsByClassName('cardPlaceholder')[0].remove();
    dealerCardsHTML.appendChild(dealerCards[1]);
    updateTotal(dealerCardsValues, "dealer");
    //should dealer hit?
    if(dealerTotal < 17) {
        giveDealerCard();
    }
}

function giveDealerCard() {
    setTimeout(() => {
        givePlayerCard("dealer");
        if(dealerTotal < 17) {
            giveDealerCard();
        }
    }, 500);
}

//popup controls
function createPopup(condition) {
    let message;
    let amount;
    let pic;
    let color;
    let sound;

    switch(condition) {
        case "blackjack":
            message = "Blackjack!";
            amount =  "+ $" + (wager + winnings);
            coins += (wager + winnings);
            numOfCoins.innerText = coins;
            pic = "rich";
            color = "green";
            sound = "cha-ching";
            break;
        case "win":
            message = "You Won!";
            amount =  "+ $" + (wager + winnings);
            coins += (wager + winnings);
            numOfCoins.innerText = coins;
            pic = "rich";
            color = "green";
            sound = "cha-ching";
            break;
        case "lost":
            message = "You Lost!";
            amount =  "- $" + wager;
            pic = "hobo";
            color = "red";
            sound = "lose";
            break;
        case "bust":
            message = "Bust!";
            amount =  "- $" + wager;
            pic = "hobo";
            color = "red";
            sound = "lose";
            break;
        case "push":
            message = "Push";
            amount = " + $" + wager;
            coins += wager;
            pic = "push";
            sound = "";
            numOfCoins.innerText = coins;
    }

    let popup = document.createElement('div');
    popup.innerHTML = 
    `
    <div id="popup">
        <div id="popup-content">
            <div id="message">
                ${message}
            </div>
            <div id="amount" style="color: ${color}">
                ${amount}
            </div>
            <div id="pic-holder">
                <img id="pic" src="images/${pic}.png" height="120">
            </div>
            <div id="continue">
                Press Enter to play again.
            </div>
        </div>
    </div>
    `
    document.getElementsByTagName('main')[0].appendChild(popup);
    if(sound !== "") {
        audio.src = "./sounds/" + sound + ".wav";
        audio.play();
    }
}

document.addEventListener("keyup", function(e) {
if(e.key === "Enter") {
    try {
        document.getElementById('popup').remove();
        resetGame();
    } catch (error) {
        return;
    }
}
});

function resetGame() {
    //reset bet
    wager = 0;
    //clear player and dealer cards and add them to burn pile
    for(let i = 0; i < playerCardsValues.length; i++) {
        dealt.push(playerCardsValues[i]);
    }
    for(let i = 0; i < dealerCardsValues.length; i++) {
        dealt.push(dealerCardsValues[i]);
    }
    playerCardsValues = [];
    dealerCardsValues = [];
    playerCards = [];
    dealerCards = [];
    playerTotal = 0;
    dealerTotal = 0;
    hide = true;
    playerCardsHTML.innerHTML = `<div class="cardPlaceholder"></div>`;
    dealerCardsHTML.innerHTML = `<div class="cardPlaceholder"></div>`;
    playerTotalHTML.innerHTML = "Please place a bet"
    dealerTotalHTML.innerHTML = "Dealer's Hand: 0"
    for(let i = 0; i < wagerButtons.length; i++) {
        wagerButtons[i].disabled = false;
    }
}
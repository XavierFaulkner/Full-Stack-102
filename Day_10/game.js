//Rock Paper Scissors   By: Xavier Faulkner

//setup all game variables
let hands = ["rock", "paper", "scissors"];

let getHand = () => {
    return parseInt(Math.random()*10)%3
}

let player1 = {
    name: "Player 1",
    numOfWins: 0,
    getHand: getHand()
}

let player2 = {
    name: "Player 2",
    numOfWins: 0,
    getHand: getHand()
}

let player3 = {
    name: "Player 3",
    numOfWins: 0,
    getHand: getHand()
}

let player4 = {
    name: "Player 4",
    numOfWins: 0,
    getHand: getHand()
}

gameInProgress = false;
roundsPlayed = 0;
playUntil = 3;

//get all html elements
const numOfRounds = document.getElementById('numOfRounds');

const playerName = document.getElementById('playerName');

const showRounds = document.querySelector('ul#rounds');

const gameHistory = document.querySelector('ul#matches');

const rock = document.getElementById('rock');

const paper = document.getElementById('paper');

const scissors = document.getElementById('scissors');

const startGame = document.getElementById('startGame');

//Update player name when input is changed
playerName.addEventListener('input', function(e){
    player1.name = playerName.value;
});

//Update playUnitl
numOfRounds.addEventListener('change', function(e) {
    playUntil = numOfRounds.value;
})

let decideWinner = (p1Move, p2Move, p1, p2) => {
    //Decide who won
    switch(p1Move) {
        case 0:
            if(p2Move == 0) {
                return null;
            } else if(p2Move == 1) {
                p2.numOfWins++;
                return p2;
            } else if(p2Move == 2) {
                p1.numOfWins++;
                return p1;
            }
        case 1:
            if(p2Move == 0) {
                p1.numOfWins++;
                return p1;
            } else if(p2Move == 1) {
                return null;
            } else if(p2Move == 2) {
                p2.numOfWins++;
                return p2;
            }
        case 2:
            if(p2Move == 0) {
                p2.numOfWins++;
                return p2;
            } else if(p2Move == 1) {
                p1.numOfWins++;
                return p1;
            } else if(p2Move == 2) {
                return null;
            }
        default:
            return null;
    }
}

let playRound = (move, p1, p2) => {
    if(roundsPlayed == 0) {
        showRounds.innerHTML = "";
    }
    p1.getHand = move;
    let p1Move = p1.getHand;

    p2.getHand = getHand();
    let p2Move = p2.getHand;
    
    let roundWinner = decideWinner(p1Move, p2Move, p1, p2);
    if(roundWinner == null) {
        roundsPlayed++;
        let roundData = document.createElement('li');
        roundData.innerHTML = "It's a tie.";
        roundData.className = "tie";
        if(showRounds.firstChild) {
            showRounds.insertBefore(roundData, showRounds.firstChild)
        } else {
            showRounds.appendChild(roundData);
        }
        return null;
    } else {
        if(p1.numOfWins < playUntil && p2.numOfWins < playUntil) {
            roundsPlayed++;
            let roundData = document.createElement('li');
            roundData.innerHTML = roundWinner.name + " wins round " + roundsPlayed;
            if(roundWinner.name === "Player 2") {
                roundData.className = "lost";
            } else {
                roundData.className = "won";
            }
            if(showRounds.firstChild) {
                showRounds.insertBefore(roundData, showRounds.firstChild)
            } else {
                showRounds.appendChild(roundData);
            }
            return roundWinner;
        } else {
            if(p1.numOfWins == playUntil) {
                roundsPlayed++;
                let roundData1 = document.createElement('li');
                roundData1.innerHTML = roundWinner.name + " wins round " + roundsPlayed;
                if(roundWinner.name === "Player 2") {
                    roundData1.className = "lost";
                } else {
                    roundData1.className = "won";
                }
                let roundData = document.createElement('li');
                roundData.innerHTML = "\n" + p1.name + " wins the Game!!! Score: " + p1.numOfWins + " - " + p2.numOfWins;
                roundData.className = "gold";
                if(showRounds.firstChild) {
                    showRounds.insertBefore(roundData1, showRounds.firstChild);
                    showRounds.insertBefore(roundData, showRounds.firstChild);
                } else {
                    showRounds.appendChild(roundData);
                }
                let gameData = document.createElement('li');
                gameData.innerHTML = roundWinner.name + " won! The score was " + p1.numOfWins + " - " + p2.numOfWins;
                gameData.className = "gold";
                if(gameHistory.firstChild) {
                    gameHistory.insertBefore(gameData, gameHistory.firstChild);
                } else {
                    gameHistory.appendChild(gameData);
                }
                roundsPlayed = 0;
                p1.numOfWins = 0;
                p2.numOfWins = 0;
                return p1;
            } else if(p2.numOfWins == playUntil) {
                roundsPlayed++;
                let roundData1 = document.createElement('li');
                roundData1.innerHTML = roundWinner.name + " wins round " + roundsPlayed;
                if(roundWinner.name === "Player 2") {
                    roundData1.className = "lost";
                } else {
                    roundData1.className = "won";
                }
                let roundData = document.createElement('li');
                roundData.innerHTML = "\n" + p2.name + " wins the Game!!! Score: " + p1.numOfWins + " - " + p2.numOfWins;
                roundData.className = "gold";
                if(showRounds.firstChild) {
                    showRounds.insertBefore(roundData1, showRounds.firstChild);
                    showRounds.insertBefore(roundData, showRounds.firstChild);
                } else {
                    showRounds.appendChild(roundData);
                }
                let gameData = document.createElement('li');
                gameData.innerHTML = roundWinner.name + " won! The score was " + p1.numOfWins + " - " + p2.numOfWins;
                gameData.className = "gold";
                if(gameHistory.firstChild) {
                    gameHistory.insertBefore(gameData, gameHistory.firstChild);
                } else {
                    gameHistory.appendChild(gameData);
                }
                roundsPlayed = 0;
                p1.numOfWins = 0;
                p2.numOfWins = 0;
                return p2;
            }
        }
    }
}

rock.addEventListener('click', function(e) {
    playRound(0, player1, player2);
});

paper.addEventListener('click', function(e) {
    playRound(1, player1, player2);
});

scissors.addEventListener('click', function(e) {
    playRound(2, player1, player2);
});
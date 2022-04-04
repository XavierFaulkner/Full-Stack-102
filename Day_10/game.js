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

//get all html elements
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

rock.addEventListener('click', function(e) {
    console.log("rock");
});

paper.addEventListener('click', function(e) {
    p1Move = 1;
});

scissors.addEventListener('click', function(e) {
    p1Move = 2;
});

let playRound = (p1, p2) => {
    //Show what each player threw
    let p1Move = -1;

    while(p1Move < 0) {
        //wait for user to make a move
        console.log("waiting");
    }
    console.log(p1.name + " throws: " + hands[p1Move]);

    p2.getHand = getHand();
    let p2Move = p2.getHand;
    console.log(p2.name + " throws: " + hands[p2Move]);

    //Decide who won
    switch(p1Move) {
        case 0:
            if(p2Move == 0) {
                console.log("It's a tie.");
                return null;
            } else if(p2Move == 1) {
                console.log(p2.name + " Wins!");
                p2.numOfWins++;
                return p2;
            } else if(p2Move == 2) {
                console.log(p1.name + " Wins!");
                p1.numOfWins++;
                return p1;
            }
        case 1:
            if(p2Move == 0) {
                console.log(p1.name + " Wins!");
                p1.numOfWins++;
                return p1;
            } else if(p2Move == 1) {
                console.log("It's a tie.");
                return null;
            } else if(p2Move == 2) {
                console.log(p2.name + " Wins!");
                p2.numOfWins++;
                return p2;
            }
        case 2:
            if(p2Move == 0) {
                console.log(p2.name + " Wins!");
                p2.numOfWins++;
                return p2;
            } else if(p2Move == 1) {
                console.log(p1.name + " Wins!");
                p1.numOfWins++;
                return p1;
            } else if(p2Move == 2) {
                console.log("It's a tie.");
                return null;
            }
        default:
            return null;
    }
}

let playGame = (p1, p2, playUntil) => {
    //untill one of the players wins enough games keep playing
    while(p1.numOfWins < playUntil && p2.numOfWins < playUntil) {
        //playRound(p1, p2);
    }

    //return the player that won
    if(p1.numOfWins == playUntil) {
        console.log("\n" + p1.name + " wins the Game!!! Score: " + p1.numOfWins + " - " + p2.numOfWins);
        return p1;
    } else if(p2.numOfWins == playUntil) {
        console.log("\n" + p2.name + " wins the Game!!! Score: " + p1.numOfWins + " - " + p2.numOfWins);
        return p2;
    }
}

//start game on click
startGame.addEventListener('click', function(e) {
    playGame(player1, player2, 5);
});
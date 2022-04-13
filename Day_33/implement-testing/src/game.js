//Rock Paper Scissors   By: Xavier Faulkner
export let hands = ["rock", "paper", "scissors"];

export let getHand = () => {
    return parseInt(Math.random()*10)%3
}

export let player1 = {
    name: "Player 1",
    numOfWins: 0,
    getHand: getHand()
}

export let player2 = {
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

export let playRound = (p1, p2) => {
    //Show what each player threw
    p1.getHand = getHand();
    let p1Move = p1.getHand;
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

export let playGame = (p1, p2, playUntil) => {
    //untill one of the players wins enough games keep playing
    while(p1.numOfWins < playUntil && p2.numOfWins < playUntil) {
        console.log();
        playRound(p1, p2);
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

let playTournament = (p1, p2, p3, p4, playUntil) => {
    //game 1 of the tournament
    console.log("\nGame 1: " + p1.name + " vs. " + p2.name + " ************************************");
    let finalist1 = playGame(p1, p2, playUntil);

    //game 2 of the tournament
    console.log("\nGame 2: " + p3.name + " vs. " + p4.name + " ************************************");
    let finalist2 = playGame(p3, p4, playUntil);

    //reset each players number of wins
    finalist1.numOfWins = 0;
    finalist2.numOfWins = 0;

    //championship game
    console.log("\nWorld championship: " + finalist1.name + " vs. " + finalist2.name + "************************************");
    let champion = playGame(finalist1, finalist2, playUntil);
    console.log("\n" + champion.name + " is the world champion!!!!!!!!");
}

//playTournament(player1, player2, player3, player4, 5);
playGame(player1, player2, 5);
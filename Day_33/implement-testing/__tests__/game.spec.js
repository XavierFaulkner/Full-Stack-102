import {hands} from "../src/game";
import {getHand} from "../src/game";
import {playRound} from "../src/game";
import {playGame} from "../src/game";
import {player1} from "../src/game";
import {player2} from "../src/game";
import {jest} from "@jest/globals";

//.toBe()
describe("Hands array", () => {
    test("Should return correct move base on index 0", () => {
        const output = "rock"
        expect(hands[0]).toBe("rock");
    })
});

//.toHaveLength()
describe("Hands array length", () => {
    test("Should return correct length of hands array", () => {
        const output = 3
        expect(hands).toHaveLength(output);
    })
});

//.toBeTruthy()
describe("playRound function", () => {
    test("Should return a player object (truthy)", () => {
        const input1 = player1;
        const input2 = player2;
        expect(playRound(input1, input2)).toBeTruthy();
    })
});

//.toHaveBeenCalled()
jest.mock('../src/game', () => {
    const originalModule = jest.requireActual('../src/game');
  
    //Mock the playRound function
    return {
      __esModule: true,
      ...originalModule,
      playRound: jest.fn(() => 'mocked round'),
    };
  });

describe("playGame function", () => {
    test("Should call playRound function", () => {
        const input1 = player1;
        const input2 = player2;
        const input3 = 1;
        playGame(input1, input2, input3);
        expect(playRound).toHaveBeenCalled();
    })
});

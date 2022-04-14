import {hands, playRound, playGame, player1, player2} from "../src/game";
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
        const playRound = jest.fn(() => true);
        const input1 = player1;
        const input2 = player2;
        expect(playRound(input1, input2)).toBeTruthy();
   
    })
});

//.toHaveBeenCalled()
const add = jest.fn((x,y) => x+y)

describe("sumNumbers function", () => {
    test("Should call add function", () => {
        function sumNumbers(num1, num2) {
            return add(num1, num2);
        }
        const input1 = 2;
        const input2 = 2;
        sumNumbers(input1, input2);
        expect(add).toHaveBeenCalled();
    })
});

describe("playRound", () => {
    test("should return player1 without errors", () => {
        const example = jest.fn(() => true);
        example();
        expect(example).toHaveReturned();
    })
});

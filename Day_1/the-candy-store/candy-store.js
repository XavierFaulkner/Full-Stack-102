let candyBarSize = "snack";
let candyBarName = "Darkest Cocoa";

switch(candyBarSize) {
    case "small":
        console.log("This " + candyBarName + " costs $1.00");
        break;
    case "medium":
        console.log("This " + candyBarName + " costs $1.75");
        break;
    case "large":
        console.log("This " + candyBarName + " costs $2.50");
        break;
    case "jumbo":
        console.log("This " + candyBarName + " costs $4.75");
        break;
    default:
        console.log("Associate please look up price and check if valid")
        break;
}

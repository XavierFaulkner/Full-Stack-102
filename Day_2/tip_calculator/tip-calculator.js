let billAmount = 1.06;

function calculateTip(billAmount) {
    return (billAmount * 0.2).toFixed(2);
}

function getBillTotal(amount) {
    return (Number(calculateTip(amount)) + amount).toFixed(2);
}

console.log("The bill sub-total is: $" + billAmount);
console.log("The tip amount is: $" + calculateTip(billAmount));
console.log("The bill total is: $" + getBillTotal(billAmount));
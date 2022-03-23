
function exponentialIteration(base, exponent) {
    let answer = base;
    for(let i = 1; i < exponent; i++) {
        answer *= base;
    }
    console.log(answer);
}

function exponentialRecursion(base, exponent) {
    if(exponent > 0) {
        return base * exponentialRecursion(base, exponent-1);
    } else {
        return 1;
    }
}

console.log(exponentialRecursion(9, 4));
exponentialIteration(9, 4);
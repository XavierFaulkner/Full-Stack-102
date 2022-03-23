let testArray = [3, 45, 9, 10, 29];

function getFirstValue(array) {
    return array[0];
}

function incrementItems(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray[i] = array[i] + 1;
    }
    return newArray;
}

function rotate(array) {
    let newArray = array;
    let tempItem = newArray.shift();
    newArray.push(tempItem);
    return newArray;
}

console.log("The test array is: " + testArray);
console.log("Get first value: " + getFirstValue(testArray));
console.log("Add 1 to every element: " + incrementItems(testArray));
console.log("Rotate the elements: " + rotate(testArray));
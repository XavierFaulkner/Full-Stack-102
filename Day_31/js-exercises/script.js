function reverseOrder(num) {
    return num.toString().split('').reverse().join('');
}
console.log(reverseOrder(349210));

function sortAlphabetically(str) {
    return str.split('').sort().join('');
}
console.log(sortAlphabetically("webmaster"));

function upperCase(str) {
    let words = str.split(' ');
    const newStr = [];
    for(let i = 0; i < words.length; i++) {
        let newWord = words[i].split('');
        newWord[0] = newWord[0].toUpperCase();
        newStr.push(newWord.join(''));
    }
    return newStr.join(' ');
}
console.log(upperCase('the quick brown fox'));

function isPrime(num) {
    if(num > 1) {
        for(let i = 2; i < num; i++) {
            if(num % i == 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
console.log(isPrime(23));

function removeChar(char, str) {
    newStr = str.split('');
    for(let i = 0; i < str.length; i++) {
        if(char === newStr[i]) {
            newStr.splice(i, 1);
        }
    }
    return newStr.join('');
}
console.log(removeChar("o", "thequickbrownfoxjumpsoverthelazydog"));
console.log(removeChar("u", "thequickbrwnfxjumpsverthelazydg"));

function secondLowestHighest(nums) {
    let newNums = [];
    newNums.push(nums.sort()[1]);
    newNums.push(nums.sort()[nums.length - 2]);
    return newNums;
}
console.log(secondLowestHighest([1,2,3,4,5]));

function bubbleSort(arr) {
    const newArr = arr;
    for(let i = 0; i < newArr.length; i++) {
        for(let j = 0; j < (newArr.length - i - 1); j++) {
            if(newArr[j] < newArr[j+1]) {
                //swap
                let temp = newArr[j];
                newArr[j] = newArr[j+1];
                newArr[j+1] = temp;
            }
        }
    }
    return newArr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
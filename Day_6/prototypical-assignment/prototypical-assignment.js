function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    this.family = [];
}

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

Person.prototype.toString = function() {
    return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

Person.prototype.addToFamily = function(person) {
    if(!(person instanceof Person)) {
        return "This is not an instance of the person object.";
    } else {
        for(let i = 0; i < this.family.length; i++) {
            if(person === this.family[i]) {
                return "This is a duplicate.";
            }
        }
        this.family.push(person);
        return this.family.length;
    }
}

let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
let xavier = new Person("Xavier", "Faulkner", "Purple", 19, ["spagehtti", "steak"]);
let carlos = new Person("Carlos", "Faulnker", "Blue", 7, ["Rice & Beans", "chicken"]);
let woogie = new Person("Woogie", "Faulkner", "Blue", 3, ["chiken", "steak"]);

console.log("All of my Person objects...");
console.log(peter.toString());
console.log(xavier.toString());
console.log(carlos.toString());
console.log(woogie.toString());

console.log("\nAdding all other Person objects to xavier's family list...");
console.log(xavier.addToFamily(peter));
console.log(xavier.addToFamily(carlos));
console.log(xavier.addToFamily(woogie));

console.log("\nTrying to add the Carlos object to Xavier's family list again...");
console.log(xavier.addToFamily(carlos));

console.log("\nTrying to add an element that is not of type Person to Xavier's family list...");
console.log(xavier.addToFamily("Joe"));
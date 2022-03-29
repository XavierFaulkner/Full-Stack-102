const storeOwners = [
  { name: "charles", stores: 1 },
  { name: "sally", stores: 1 },
  { name: "cassandra", stores: 1 },
  { name: "Danny Shavez", stores: 1, location: "in NM" },
];

const listNumberOfStores = function () {
  let total = 0;
  for (let i = 0; i < storeOwners.length; i++) {
    total += storeOwners[i].stores;
  }
  return total;
};

let totalLocations = listNumberOfStores();

function tellMeMyStores() {
  console.log("Hey, can you tell me how many stores you have?");
  if (totalLocations > 0) {
    console.log("Of course, we have " + totalLocations + " stores");
  }
}

function hasStore() {
  for (let i = 0; i < storeOwners.length - 1; i++) {
    if (storeOwners[i].stores > 0) {
      console.log("Yes, " + storeOwners[i].name + " has one");
    }
  }
}

tellMeMyStores();
hasStore();

if (storeOwners[storeOwners.length - 1].stores > 0) {
  console.log("Yes, " + storeOwners[storeOwners.length - 1].name +" that lives " + storeOwners[storeOwners.length - 1].location + " owns one too.");
}

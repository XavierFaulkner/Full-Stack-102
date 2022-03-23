let weekend = false;
let holiday = false;
let time = 10.3;

if((!weekend && !holiday) && (time >= 8 && time <= 18 )) {
    console.log("The store is open for business.");
} else {
    console.log("The store is closed");
}

if(weekend == false && holiday == false) {
    if(time >= 8 && time <= 18) {
        console.log("The store is open for business.");
    } else {
        console.log("The store is closed");
    }
} else {
    console.log("The store is closed");
}

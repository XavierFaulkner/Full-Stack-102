function outer() {

    let a = "string"
    let b = {name: "object"}
    console.log(a);
    console.log(b);

    function inner(a, b) {
        a = "new string"
        b = {name: "new object", update: "new property"}
        console.log(a);
        console.log(b);
    }

    inner(a, b);
    console.log(a);
    console.log(b);
}

outer();

/*

In JavaScript, a closure is created when a function captures variables from its outer lexical scope.

However, if a function does not reference any outer variables, a closure is not created.

*/

// Case 1: Function Without Referencing Outer Variables (No Closure)

function simpleFunction() {
    console.log("Hello, World!");
}

//simpleFunction();

//console.dir(simpleFunction);

// Case 2: Function That Captures Outer Variable (Closure Created)

const outerVar = "I am outer";

function capturingFunction() {
    console.log(outerVar);
}
//capturingFunction();
//console.dir(capturingFunction);

// create a function that returns another function to explicitly capture a closure.

function outerFunction(outerVariable) {

    return function innerFunction(innerVariable) {

        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

//const closureInstance = outerFunction("Hello");

//closureInstance("How are you ?")

//console.log(closureInstance);

//console.dir(closureInstance);

//Inspecting Closures in the Debugger

//Place a debugger statement inside the function

function makeCounter() {
    let count = 0;
    return function () {
         // Pause execution to inspect scope
        return count++;
    };
}
const counter = makeCounter();

counter(); // Call it to create the closure
counter()
console.log(counter());

console.log(counter());

console.log(counter());

console.log(counter());

console.log(counter());

console.log(counter());

console.log(counter());

console.log(counter());

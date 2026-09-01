//Closures Functions are functions that have access to variables from another function’s scope. This is often used to create private variables or to maintain state between function calls.

//Example of a closure function in JavaScript
function outerFunction() {
    let outerVariable = "I am from the outer function";
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

//Another example of a closure function in JavaScript
function makeCounter() {
    let count = 0;
    
    return function() {
        count++;
        console.log(count);
    };
}
    
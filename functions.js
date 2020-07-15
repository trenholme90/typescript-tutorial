"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// Return type of void. Use void if a function returns nothing.
// Void is intererd here but it's written here for demo purposes
function printResult(num) {
    console.log("Result: " + num);
}
// Callback takes one number parameter and returns void (does not use what is being returned, if anything)
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
printResult(add(5, 12));
// Specify function type for this variable to ensure you can't just use any function.
// This is saying this can be any function that takes 2 number parameters and returns a number
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
console.log(combinedValues(8, 9));
addAndHandle(10, 20, function (result) {
    console.log(result);
});

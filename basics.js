"use strict";
console.log("Typescript incoming!");
function addNum(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
var num2 = 10.5;
var prntResult = true;
var res = "Result is: ";
addNum(num1, num2, prntResult, res);

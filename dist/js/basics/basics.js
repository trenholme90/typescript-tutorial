"use strict";
console.log("Typescript incoming!");
function addNum(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const num1 = 5;
const num2 = 10.5;
const prntResult = true;
const res = "Result is: ";
addNum(num1, num2, prntResult, res);
//# sourceMappingURL=basics.js.map
"use strict";
// unknown type can accept any type but will error if assigned to a variable that accepts only one type.
let userInput;
let userName;
userInput = 5;
userInput = "Max";
// Runtime check allows for unknown type to be used with set type if it passes check
if (typeof userInput === "string") {
    userName = userInput;
}
// Never return type makes very clear nothing is returned
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
const result = generateError("An error occured", 500);
// As error is thrown it crashes script so doesn't even return undefined like a void function would.
console.log(result);
//# sourceMappingURL=unknownNeverType.js.map
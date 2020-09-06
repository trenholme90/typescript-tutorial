"use strict";
// TypeScript doesn't know what this object is so can't reference and properties e.g. obj.name
// Specify a generic (Convention is the letter T). It captures the item and properties on it
// when passed to the function
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Yoshi", age: 30 });
console.log(docOne.name);
const personData = {
    name: "James",
    age: 23,
};
// Specifying the type we want data to have using generics
const newPerson = {
    uid: 23,
    resourceType: "Person",
    data: personData,
};
//# sourceMappingURL=generics.js.map
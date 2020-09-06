"use strict";
// const person: {
// 	// Overwrites Typecript inference to ensure type check on Tuple
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	// Typescript inference, sets stype of each key to it's value automatically
// 	name: "James",
// 	age: 30,
// 	hobbies: ["Sports", "Cooking"],
// 	// Tuple: fixed length array with specific types
// 	role: [2, "author"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// enum is an object type that assigns numbers (can be other types of explicitly defined) to it's labels
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    // Typescript inference, sets stype of each key to it's value automatically
    name: "James",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    // Tuple: fixed length array with specific types
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;
console.log(person);
for (const hobby of person.hobbies) {
    // Typescript knows hobby is of type string so you can access string methods
    console.log(hobby.toUpperCase());
}
person.role === Role.ADMIN ? console.log("ADMIN") : console.log("READ_ONLY");
//# sourceMappingURL=objs.js.map
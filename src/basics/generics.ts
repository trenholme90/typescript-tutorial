// TypeScript doesn't know what this object is so can't reference and properties e.g. obj.name
// Specify a generic (Convention is the letter T). It captures the item and properties on it
// when passed to the function
const addUID = <T extends { name: string }>(obj: T) => {
	let uid = Math.floor(Math.random() * 100);
	return { ...obj, uid };
};

let docOne = addUID({ name: "Yoshi", age: 30 });

console.log(docOne.name);
// We don't want to specify what type data is as it could be different types but we definately want to make sure
// a data property is included in the interface. Use a generic to specify ensure this functionality.
interface Resource<T> {
	uid: number;
	resourceType: string;
	data: T;
}

const personData = {
	name: "James",
	age: 23,
};

// Specifying the type we want data to have using generics
const newPerson: Resource<object> = {
	uid: 23,
	resourceType: "Person",
	data: personData,
};

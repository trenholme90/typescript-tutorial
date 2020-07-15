// Type alias is a custom type that can be used for any type set-up
type Combinable = number | string;
// If you no specific values use literal types like this.
type ConversionDescriptor = "as-number" | "as-text";

function combine(
	// Union types allow for more than one type
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
) {
	// Have to do runtime check of types becuase TS doesn't know if it can can add input1 and input2 types together
	// so needs explicit check. Often needed with union types but not always.
	let result;
	if (
		(typeof input1 === "number" && typeof input2 === "number") ||
		resultConversion === "as-number"
	) {
		// convert to number if string
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combinedAges = combine(30, 26, "as-number");
const combinedNames = combine("Max", "James", "as-text");
const combinedStringAges = combine("30", "20", "as-number");
console.log(combinedAges);
console.log(combinedNames);
console.log(combinedStringAges);

import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
	// readonly client: String;
	// private details: string;
	// public amount: number;

	// constructor(c: string, d: string, a: number) {
	// 	this.client = c;
	// 	this.details = d;
	// 	this.amount = a;
	// }

	//Short hand for above
	constructor(
		readonly client: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.client} owes £${this.amount} for ${this.details}`;
	}
}

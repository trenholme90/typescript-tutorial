import { HasFormatter } from "../interfaces/HasFormatter";

export class CustomerQuery implements HasFormatter {
	constructor(
		public email: string,
		public reason: string,
		public message: string
	) {}

	format() {
		return `Email: ${this.email}, reason: ${this.reason}, message: ${this.message}`;
	}
}

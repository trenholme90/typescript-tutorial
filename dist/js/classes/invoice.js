export class Invoice {
    // readonly client: String;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    // 	this.client = c;
    // 	this.details = d;
    // 	this.amount = a;
    // }
    //Short hand for above
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
//# sourceMappingURL=invoice.js.map
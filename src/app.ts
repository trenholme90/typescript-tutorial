import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo:

const form = document.querySelector("form") as HTMLFormElement;
const emailInput = document.querySelector(
	"#exampleEmailInput"
) as HTMLInputElement;
const recipientInput = document.querySelector(
	"#exampleRecipientInput"
) as HTMLSelectElement;
const messageInput = document.querySelector(
	"#exampleMessage"
) as HTMLTextAreaElement;

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	console.log(emailInput.value, recipientInput.value, messageInput.value);
});

const inv1 = new Invoice("Mario", "Work on Mario Website", 250);
const inv2 = new Invoice("Luigi", "Work on Luigi Website", 300);

// Must be Invoice and array
let invoices: Invoice[] = [];

invoices.push(inv1, inv2);

console.log(invoices);
invoices.forEach((inv) => {
	console.log(inv.client, inv.amount, inv.format());
});

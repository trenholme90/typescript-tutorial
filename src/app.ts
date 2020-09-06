import { CustomerQuery } from "./classes/customerQuery.js";
import { ListTemplate } from "./classes/list.js";

const form = document.querySelector("form") as HTMLFormElement;
const emailInput = document.querySelector(
	"#exampleEmailInput"
) as HTMLInputElement;
const reasonInput = document.querySelector(
	"#exampleReasonInput"
) as HTMLSelectElement;
const messageInput = document.querySelector(
	"#exampleMessage"
) as HTMLTextAreaElement;
const container = document.querySelector(".container") as HTMLDivElement;

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	const query: CustomerQuery = new CustomerQuery(
		emailInput.value,
		reasonInput.value,
		messageInput.value
	);

	const list = new ListTemplate(container);
	list.render(query, query.reason, "end");
});

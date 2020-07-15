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

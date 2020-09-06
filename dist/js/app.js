import { CustomerQuery } from "./classes/customerQuery.js";
import { ListTemplate } from "./classes/list.js";
const form = document.querySelector("form");
const emailInput = document.querySelector("#exampleEmailInput");
const reasonInput = document.querySelector("#exampleReasonInput");
const messageInput = document.querySelector("#exampleMessage");
const container = document.querySelector(".container");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = new CustomerQuery(emailInput.value, reasonInput.value, messageInput.value);
    const list = new ListTemplate(container);
    list.render(query, query.reason, "end");
});
//# sourceMappingURL=app.js.map
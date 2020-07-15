"use strict";
var form = document.querySelector("form");
var emailInput = document.querySelector("#exampleEmailInput");
var recipientInput = document.querySelector("#exampleRecipientInput");
var messageInput = document.querySelector("#exampleMessage");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(emailInput.value, recipientInput.value, messageInput.value);
});
//# sourceMappingURL=app.js.map
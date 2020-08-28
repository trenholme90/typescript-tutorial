"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var inv1 = new Invoice("Mario", "Work on Mario Website", 250);
var inv2 = new Invoice("Luigi", "Work on Luigi Website", 300);
var invoices = [];
invoices.push(inv1, inv2);
console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector("form");
var emailInput = document.querySelector("#exampleEmailInput");
var recipientInput = document.querySelector("#exampleRecipientInput");
var messageInput = document.querySelector("#exampleMessage");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(emailInput.value, recipientInput.value, messageInput.value);
});
//# sourceMappingURL=app.js.map
export class CustomerQuery {
    constructor(email, reason, message) {
        this.email = email;
        this.reason = reason;
        this.message = message;
    }
    format() {
        return `Email: ${this.email}, reason: ${this.reason}, message: ${this.message}`;
    }
}
//# sourceMappingURL=customerQuery.js.map
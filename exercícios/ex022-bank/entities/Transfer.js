const Deposit = require("./Deposit");

module.exports = class Transfer extends Deposit {
  constructor(amount, sender, receiver) {
    super(amount);
    this.sender = sender;
    this.receiver = receiver;
    super.createdIn;
  }
};

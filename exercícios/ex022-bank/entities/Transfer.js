module.exports = class Transfer {
  constructor(amount, sender, receiver) {
    this.amount = amount;
    this.sender = sender;
    this.receiver = receiver;
    this.createdAt = new Date();
  }
};

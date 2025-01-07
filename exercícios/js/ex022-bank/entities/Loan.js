const Installment = require("./Installment");

module.exports = class Loan {
  static #fee = 1.05;

  constructor(amount, installments) {
    this.amount = amount;
    this.installments = []
    for (let i = 1; i <= installments; i++) {
      this.installments.push(new Installment((amount * Loan.#fee) / installments), i)
    }
    this.createdAd = new Date
  }

  static get fee() {
    return Loan.#fee;
  }

  static set fee(newFeePercentage) {
    Loan.#fee = 1 + newFeePercentage / 100;
  }
};

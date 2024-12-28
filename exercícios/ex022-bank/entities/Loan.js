const Installment = require("./Installment");

module.exports = class Loan {
  static #interestRate = 0.05;

  constructor(amount, installment) {
    this.amount = amount;
    this.createdIn = Date();
    this.installment = new Installment(
      amount,
      installment,
      "pendente...",
      Loan.getInterestRate
    );
  }

  static get getInterestRate() {
    return this.#interestRate;
  }

  static set setInterestRate(value) {
    this.#interestRate = value;
  }
};

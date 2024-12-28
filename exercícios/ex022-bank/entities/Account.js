const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

module.exports = class Account {
  #balance;

  constructor(username) {
    this.username = username;
    this.#balance = 0;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }

  deposit(amount) {
    this.#balance += amount;
    this.deposits.push(new Deposit(amount));
  }

  loan(amount, installments) {
    this.#balance += amount;
    this.loans.push(new Loan(amount, installments));
  }

  transfer(amount, user, transactionType) {
    const addTransfer = (param) => {
      this.transfers.push(param);
    };

    if (transactionType === "transferring") {
      this.#balance -= amount;
      user.deposit(amount)
      addTransfer(new Transfer(amount, this, user));
    } else if (transactionType === "receiving") {
      this.#balance += amount;
      addTransfer(new Transfer(amount, user, this));
    }
  }

  get getBalance() {
    return this.#balance
  }
};

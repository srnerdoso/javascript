const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const Transfer = require("./entities/Transfer");
const User = require("./entities/User");

module.exports = class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  static createUser(email, fullname) {
    App.findUser(email)
      ? console.log("ERROR! This user already exists.")
      : this.#users.push(new User(fullname, email));
  }

  static deposit(email, amount) {
    const user = App.findUser(email);
    user
      ? user.account.addDeposit(new Deposit(amount))
      : console.log("ERROR! This user is not existis.");
  }

  static transfer(senderEmail, receiverEmail, amount) {
    const sender = App.findUser(senderEmail);
    const receiver = App.findUser(receiverEmail);

    if (senderEmail && receiverEmail) {
      const newTransfer = new Transfer(amount, senderEmail, receiverEmail)
      sender.account.addTransfer(newTransfer);
      receiver.account.addTransfer(newTransfer)
    }
  }

  static takeLoan(email, amount, numberOfInstallments) {
    const user = App.findUser(email);
    if (user) user.account.addLoan(new Loan(amount, numberOfInstallments))
  }

  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage
  }
};

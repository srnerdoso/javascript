const Account = require("./entities/Account");
const Loan = require("./entities/Loan");
const User = require("./entities/User");

module.exports = class App extends Account {
  static #users = [];

  static createUser(username, email) {
    this.#users.find((user) => {
      user.email === email;
    })
      ? console.log(
          `O email ${email} já está registrado! Faça login ou crie outra conta!`
        )
      : this.#users.push(new User(username, email, new Account(username)));
  }

  static findUser(email) {
    return this.#users.find((user) => user.email === email);
  }

  static setInterestRate(value) {
    Loan.setInterestRate = 10;
  }
};

module.exports = class Account {
  #balance;

  constructor(user) {
    this.owner = user;
    this.#balance = 0;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }

  get getBalance() {
    return this.#balance
  }

  addDeposit(deposit) {
    this.#balance += deposit.amount;
    this.deposits.push(deposit);
  }

  addLoan(loan) {
    this.#balance += loan.amount;
    this.loans.push(loan);
  }

  addTransfer(transfer) {
    if (transfer.sender === this.owner.email) {
      this.#balance -= transfer.amount;
      this.transfers.push(transfer);
    } else if (transfer.receiver === this.owner.email) {
      this.#balance += transfer.amount;
      this.transfers.push(transfer);
    }
  }
};

module.exports = class Deposit {
  constructor(amount) {
    this.mount = amount;
    this.createdIn = Date();
  }
};

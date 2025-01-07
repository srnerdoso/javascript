module.exports = class Deposit {
  constructor(amount) {
    this.mount = amount;
    this.createdat = new Date();
  }
};

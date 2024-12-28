module.exports = class Installment {
  constructor(amount, installment, status, interestRate) {
    this.amount = amount;
    this.installment = installment;
    this.status = status;
    this.payment = () => {
      const amountDivision = amount / installment;
      return (interestRate / 100) * amountDivision + amountDivision;
    };
  }
};

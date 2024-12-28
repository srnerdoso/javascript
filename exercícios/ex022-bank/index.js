const App = require("./App");

App.createUser("Nerdola", "nerds@nedices.com", 1234);
const nerdola = App.findUser("nerds@nedices.com").account;

App.createUser("Pz", "pz@nedices.com", 1234);
const pz = App.findUser("pz@nedices.com").account;

console.log(nerdola);
console.log(pz);

nerdola.deposit(10000.0);
console.log(nerdola);

nerdola.transfer(600, pz, "transferring");

console.log(nerdola.getBalance);
console.log(pz.getBalance);

nerdola.loan(50000, 10);
console.log(nerdola);
console.log(nerdola.loans[0].installment.payment());
console.log(nerdola.getBalance);

App.setInterestRate(10);

nerdola.loan(50000, 10);
console.log(nerdola);
console.log(nerdola.loans[0].installment);
console.log(nerdola.loans[0].installment.payment());
console.log(nerdola.getBalance);

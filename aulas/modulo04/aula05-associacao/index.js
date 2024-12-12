const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de Setembro", 92, "Centro", "São Fidelis", "RJ")
const jhon = new Person("Jhon Doe", addr)
// const jhon = new Person("7 de Setembro", 92, "Centro", "São Fidelis", "RJ")

console.log(jhon)
console.log(jhon.adress.fullAddress())

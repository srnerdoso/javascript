const App = require("./App")

App.createUser("nerdola@email.com", "Senhor Nerdoso")
App.createUser("pzglevi@email.com", "Pzg Levi")
App.createUser("golpebaixo@email.com", "Golpe Baixo")

App.deposit("nerdola@email.com", 100)

App.transfer("nerdola@email.com", "pzglevi@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("golpebaixo@email.com", 2000, 24)

console.log(App.findUser("nerdola@email.com"))
console.log(App.findUser("nerdola@email.com").account)
console.log(App.findUser("pzglevi@email.com"))
console.log(App.findUser("pzglevi@email.com").account)
console.log(App.findUser("golpebaixo@email.com"))
console.log(App.findUser("golpebaixo@email.com").account)
console.log(App.findUser("golpebaixo@email.com").account.loans[0].installments)

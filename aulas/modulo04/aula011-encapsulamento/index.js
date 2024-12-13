const Account = require("./Account")

const user = {
  email: "user@email.com",
  password: "123456"
}
const { email, password } = user

const userAccount = new Account(user)

console.log(userAccount)
// console.log(userAccount.#password) // error
// console.log(userAccount.#balance) // error
// console.log(userAccount.#authenticate()) // error
console.log(userAccount.getBalance(email, password))
console.log(userAccount.getBalance(email, "000000"))

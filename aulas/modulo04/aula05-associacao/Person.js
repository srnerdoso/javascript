// const Address = require("./Address")

class Person {
  constructor(name, address, street, number, neighborhood, city, state) {
    this.name = name
    this.adress = address
    // this.address = new Address(street, number, neighborhood, city, state)
  }
}

module.exports = Person
class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  addToStock(quantity) {
    this.inStock += quantity
  }
  calculateDiscount(percentage) {
    this.price = this.price - percentage * this.price / 100
  }
}

const rice = new Product("rice", "non-perishable food", 10)
console.log(rice)

rice.addToStock(200)
rice.calculateDiscount(5)

console.log(rice)

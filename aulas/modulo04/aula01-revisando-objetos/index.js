// const book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: ["fantasy", "adventure", "medieval"],
//   author: {
//     name: "Christopher Paolini"
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity
//   },
//   save: function () {
//     // Save book data to database
//   }
// }
// console.log(book)

// book.addOnStock(50)
// console.log(book)
// console.log(book.inStock)

// Funções construtoras
// PascalCase -> camelCase
function Book(title = "", pages = 1, tags = [], author = {}) {
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = (quantity) => {
    this.inStock += quantity
  }
  this.save = () => {
    // Save book to database
  }
}

const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure", "medieval"]

const eragon = new Book("Eragon", 468, tags, author)

eragon.addOnStock(20)

const eldest = new Book("Eragon", 468, tags, author)

console.log(eragon)
console.log(eldest)

const Author = require("./Author");

const jhon = new Author("Jhon Sena")

const post = jhon.writePost("Título do post", "Lorem ipsum dolor sic ...")

post.addComment("nerdoso", "Lorem!")
post.addComment("pz", "JHON SENA! TUTURUTUUUU")

console.log(jhon)
console.log(post)

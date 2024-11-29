const person = {
    name: "Nerdoso",
    job: "Developer",
    parents: ["Dito", "Maria"]
}

const name = person.name

// Quebra o objeto em job e parents
const { job, parents } = person
console.log(name, job, parents)

// Quebra a lista do item parents em father e mother
const [father, mother] = parents
console.log(father, mother)

// Também é possível utilizar a desestruturação em funções
function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

console.log(createUser(person))
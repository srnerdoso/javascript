const user = {
    name: "John Doe",
    email: "doejhon@email.com",
    friends: [{
        name: "Mary",
        adress: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "99999-9999"
    }
}

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)

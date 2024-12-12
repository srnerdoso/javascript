class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    const verifyLogin = email === this.email && password === this.password;
    verifyLogin
      ? console.log("Login efetuado com sucesso!")
      : console.log("Email ou senha incorretos!");
  }
}

const fullname = "Senhor Nerdoso";
const email = "srnerdoso@email.com";
const password = "12345";

const nerdoso = new User(fullname, email, password);
nerdoso.login("nerdoso@email.com", "54321");
nerdoso.login(email, password)

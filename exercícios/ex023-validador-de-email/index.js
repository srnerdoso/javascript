function verifyEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    throw new Error("Email inválido!");
  }
}

function verifyPassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[0-9]/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
  ) {
    throw new Error(
      "Senha inválida!\nPara que uma senha seja válida ela deve possuir:\n" +
        "- Pelo menos uma letra minúscula.\n- Pelo menos uma letra maiúscula.\n" +
        "- Pelo menos um número.\n- Pelo menos um caractere especial.\n" +
        "- Pelo menos 8 caracteres."
    );
  }
}

document.getElementById("submit").addEventListener("click", (ev) => {
  ev.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  try {
    verifyEmail(email.value);
    verifyPassword(password.value);
  } catch (error) {
    alert(error.message);
  }
});

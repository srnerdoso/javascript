// Usando o sessionStorage
document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("session", input.value);
  input.value = "";
});

document.getElementById("readSession").addEventListener("click", function () {
  const session = sessionStorage.getItem("session");
  alert("A informação salva é: " + session);
});

// Usando o localStorage
document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("local", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const local = localStorage.getItem("local");
  alert("O texto salvo no localStorage é: " + local);
});

// Usando cookies
document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");

  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expires = "expires=" + new Date(2024, 11, 23) + ";";
  const path = "path/;";

  document.cookie = cookie + expires + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");

  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expires = "expires=" + new Date(2025, 1, 1) + ";";
  const path = "path=/;";

  document.cookie = cookie + expires + path;
  input.value = "";
  console.log(document.cookie);
});

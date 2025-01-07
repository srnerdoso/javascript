import { input, allowedKeys } from "./variables.js"
import calculate from "./calculate.js";

const charKeyEv = document
  .querySelectorAll(".charKey")
  .forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value;
      input.value += value;
    });
  });

const clearEv = document
  .getElementById("clear")
  .addEventListener("click", function () {
    input.value = "";
    input.focus();
  });

const backspaceEnterEv = input.addEventListener("keydown", function (ev) {
  ev.preventDefault();

  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

const equalEv = document
  .getElementById("equal")
  .addEventListener("click", calculate);

export { charKeyEv, clearEv, backspaceEnterEv, equalEv };

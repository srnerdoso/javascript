function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada.");
    setTimeout(() => {
      if (false) {
        reject("A promisse foi rejeitada");
      } else {
        console.log("Resolvendo a promise...");
        resolve(42);
      }
    }, 3 * 1000);
  });
}

execute()
  .then((result) => {
    console.log(`A promisse foi resolvida! Resultado: ${result}`);
  })
  .catch((err) => {
    console.log(`A promisse foi rejeitada! Motivo: ${err}`);
  })
  .finally(() => {
    console.log("A promisse foi finalizada!");
  });

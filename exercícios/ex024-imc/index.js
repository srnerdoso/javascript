function calculateIMC(wheight, height) {
  return new Promise((resolve, reject) => {
    typeof wheight === "number" && typeof height === "number"
      ? resolve((wheight / height ** 2).toFixed(1))
      : reject("Por favor digite apenas números.");
  });
}

function imc(wheight, height) {
  calculateIMC(wheight, height)
    .then((result) => {
      const imcTable = {
        magreza: result < 18.5,
        normal: result >= 18.5 && result <= 24.9,
        sobrepeso: result >= 25 && result <= 29.9,
        obesidade: result >= 30 && result <= 39.9,
        obesidade_grave: result >= 40,
      };

      console.log(`Seu IMC é: ${result}.`);
      console.table(imcTable);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Calculando imc para ${wheight}KG e ${height}m...`)
}

imc(80, 1.8);
imc(90, "dois metros");
imc(120, 1,6);

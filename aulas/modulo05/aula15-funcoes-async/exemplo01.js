async function asyncSum(a, b) {
  return a + b;
}

asyncSum(1, 1).then((result) => console.log(`1 + 1 é igual a ${result}`));

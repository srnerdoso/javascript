async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("arguments must be of type number");
  }
  return a + b;
}

async function execute() {
  const sumResult = await asyncSum(50, 33);
  console.log(sumResult);
}

execute();

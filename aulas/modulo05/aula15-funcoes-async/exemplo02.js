async function asyncSubtract(a, b) {
  return a - b;
}

const sumResult = asyncSum(50, 33);
const subtractResult = asyncSubtract(50, 33);

Promise.all([sumResult, subtractResult]).then((results) => {
  console.log(results);
});

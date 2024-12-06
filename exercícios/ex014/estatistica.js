function arithmeticMean(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length;
}

function weightedArithmeticMean(...data) {
  let sumNumber = 0;
  let sumWheight = 0;
  data.forEach((number) => {
    const multiplication = number.number * number.wheight;
    sumWheight += number.wheight;
    sumNumber += multiplication;
  });

  return console.log(sumNumber / sumWheight);
}

function median(...numbers) {
  // Mediana
  let medianIndex = (numbers.length - 1) / 2;

  if (medianIndex % 1 !== 0) {
    medianIndex = Math.ceil(medianIndex);
    calcMedian = (numbers[medianIndex] + numbers[medianIndex - 1]) / 2;
    return console.log(calcMedian);
  }

  console.log(numbers[medianIndex]);
}

function mode(...numbers) {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter(n => num === n).length,
  ]);

  quantities.sort((a, b) => b[1] - a[1])

  return quantities[0][0]
}

console.log(mode(1, 1, 3, 4, 4, 5, 6, 4));
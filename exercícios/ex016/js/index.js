const dayjs = require("dayjs");

const person = {
  name: "srnerdoso",
  birthday: "2002-12-23",
};
const { name, birthday } = person;

function calculateBirthday(date) {
  const dateToday = dayjs(dayjs().format());
  const dateBday = dayjs(date);

  const age = dateToday.diff(dateBday, "year");
  console.log(`A idade de ${name} é: ${age}!`);

  const nextBday = dateBday.add(age + 1, "year")
  console.log(
    `O próximo aniversário de ${name} será em ${nextBday.format("DD/MM/YYYY")}.`
  );

  const daysToBday = nextBday.diff(dateToday, "day") + 1
  console.log(`O próximo aniversário de ${name} será em ${daysToBday} dias!`)
}

calculateBirthday(birthday);

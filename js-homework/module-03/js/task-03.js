const findBestEmployee = function(employees) {
  let total = 0;
  let name;

  for (const val of Object.entries(employees)) {
    if (val[1] > total) {
      name = val[0];
      total = val[1];
    }
  }

  return `Самый продуктивный сотрудник - ${name}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

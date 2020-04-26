let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (isNaN(input) === true) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(Number(input));
    console.log(numbers);
  }
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

if (total === 0 || total === '') {
  console.log('Вы не ввели ни одного числа, считать не чего');
} else {
  console.log(`Общая сумма введеных чисел, равна ${total}`);
}

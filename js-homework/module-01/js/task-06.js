let input;
let total = 0;

do {
  input = prompt('Введите число');
  if (isNaN(input) === true) {
    alert('Вы ввели не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
} while (input !== null);

if (total === 0 || total === '') {
  alert('Вы не ввели ни одного числа, считать не чего');
} else {
  alert(`Общая сумма введеных чисел, равна ${total}`);
}

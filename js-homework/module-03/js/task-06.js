let input;
const numbers = [];
let total = 0;

// do {
// const inputResault;
//   input = prompt('Введите число');

//   inputResault = numbers.push(Number(input));

//   console.log(numbers);
// } while (input !== null);

do {
  let inputResault;

  input = prompt('Введите число');
  if (isNaN(input) === true) {
    alert('Вы ввели не число, попробуйте еще раз');
  } else {
    inputResault = numbers.push(Number(input));
  }
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

// if (total === 0 || total === '') {
//   alert('Вы не ввели ни одного числа, считать не чего');
// } else {
//   alert(`Общая сумма введеных чисел, равна ${total}`);
// }

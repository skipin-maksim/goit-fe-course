let credits = 23580;
const pricePerDroid = 3000;
const howToBuy = prompt('Сколько дроидов Вы хотите купить?');
let totalPrice;

if (howToBuy === null) {
  console.log('Отменено пользователем');
} else {
  totalPrice = Number(howToBuy) * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${howToBuy} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}

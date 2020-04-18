let cost;
let country = prompt('Укажите страну доставки');

if (country === null) {
  alert('Отменено пользователем.');
} else if (country === '') {
  do {
    alert('Вы ничего не ввели, введите страну доставки');
    country = prompt('Укажите страну доставки').toLowerCase();
  } while (country === '');
} else {
  country = country.toLowerCase();
}

if (country !== null) {
  switch (country) {
    case 'китай':
      cost = 100;
      break;
    case 'чили':
      cost = 250;
      break;
    case 'австралия':
      country = 'австралию';
      cost = 170;
      break;
    case 'индия':
      country = 'индию';
      cost = 80;
      break;
    case 'ямайка':
      country = 'ямайку';
      cost = 120;
      break;

    default:
      alert('В вашу страну доставка не доступна.');
  }

  if (
    country === 'китай' ||
    country === 'чили' ||
    country === 'австралию' ||
    country === 'индию' ||
    country === 'ямайку'
  ) {
    country = country[0].toUpperCase() + country.substring(1);
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
  }
}

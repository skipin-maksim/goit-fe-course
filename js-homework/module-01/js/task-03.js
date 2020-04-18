const ADMIN_PASSWORD = 'qwerty';
let userInput = prompt('Введите пароль');
let message;

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === userInput) {
  message = 'Добро пожаловать, Admin!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);

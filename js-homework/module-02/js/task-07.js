const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => {
  let validNewLogin = true;

  if (login.length < 4 || login.length > 16) {
    validNewLogin = false;
  }

  return validNewLogin;
};

const isLoginUnique = (allLogins, login) => {
  let newLoginUnique = false;

  if (allLogins.includes(login) === false) {
    newLoginUnique = true;
  }

  return newLoginUnique;
};

const addLogin = (allLogins, login) => {
  if (isLoginValid(login) === false) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  if (isLoginUnique(allLogins, login) === false) {
    return 'Такой логин уже используется!';
  }

  if (
    isLoginValid(login) === true &&
    isLoginUnique(allLogins, login) === true
  ) {
    allLogins.push(login);
  }
  return 'Логин успешно добавлен!';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);

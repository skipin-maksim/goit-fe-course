const logins = ['Mango', 'robotGoogles'];

const isLoginValid = function(login) {
  let validNewLogin = true;

  if (login.length < 4 || login.length > 16) {
    validNewLogin = false;
  }

  return validNewLogin;
};

const isLoginUnique = function(allLogins, login) {
  let newLoginUnique = true;

  for (let i = 0; i < allLogins.length; i += 1) {
    if (allLogins[i] === login) {
      newLoginUnique = false;
    }
  }

  return newLoginUnique;
};

const addLogin = function(allLogins, login) {
  let newLogin;

  if (isLoginValid(login) === false) {
    newLogin = 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (isLoginUnique(allLogins, login) === false) {
    newLogin = 'Такой логин уже используется!';
  } else {
    for (let i = 0; i < allLogins.length; i += 1) {
      if (login !== allLogins[i]) {
        allLogins.push(login);
        console.log(allLogins);
        newLogin = 'Логин успешно добавлен!';
      }
    }
  }

  return newLogin;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);

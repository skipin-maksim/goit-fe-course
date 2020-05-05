// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с
// балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const couter = 0;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let counter = 0;
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Функция генерации ID
   */
  addId() {
    return (counter += 1);
  },

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const result = {};

    result.id = this.addId();
    result.type = type;
    result.sum = amount;

    this.transactions.push(result);

    return result;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    this.createTransaction(amount, Transaction.DEPOSIT);

    return `На ваш счет зачисленно: +${amount}$`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return `Снятие ${amount}$ не возможно, недостаточно средств. На вашем счету: ${this.balance}$`;
    }

    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);

    return `С вашего счета списано: -${amount}$`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const idItem of this.transactions) {
      if (id === idItem.id) {
        return `Операция под идентификатором ${id}, имеет тип ${idItem.type} и сумму ${idItem.sum}$`;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let tottalCash = 0;

    for (const val of this.transactions) {
      if (type === val.type) {
        tottalCash += val.sum;
      }
    }

    return `Общая сумма транзакций ${type} равна: ${tottalCash}$`;
  },
};

//* Кладем деньги на баланс
console.log(account.deposit(100));
console.log(account.deposit(200));
console.log(account.deposit(300));
console.log(account.deposit(60));
console.log(account.deposit(40));

//* Снимаем деньги с баланса
console.log(account.withdraw(150));
console.log(account.withdraw(50));

//* Пытаемся снять сумму больше чем на балансе
console.log(account.withdraw(2500));

//* Проверяем баланс
console.log(`Текущий баланс вашего счета: ${account.balance}$`);
console.table(account.transactions);

//* Kоличество средств определенного типа транзакции
//* Вариант 1
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));

//* Вариант 2
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account.getTransactionDetails(5));
console.log(account.getTransactionDetails(7));

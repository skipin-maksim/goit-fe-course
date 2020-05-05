const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  let total = 0;
  let quantityItem = 0;

  for (const item of allProdcuts) {
    if (productName === item.name) {
      total = item.price * item.quantity;

      quantityItem = item.quantity;
    }
  }

  return `${quantityItem} шт ${productName}(ов) будут стоить ${total}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

class Storage {
  constructor(itemsArr) {
    this.items = itemsArr;
  }

  // возвращает массив текущих товаров
  getItems() {
    return this.items;
  }

  // получает новый товар и добавляет его к текущим
  addItem(item) {
    this.items.push(item);
  }

  // получет товар и, если он есть, удаляет его из текущих
  removeItem(item) {
    this.items.forEach((valueItem, index) => {
      if (valueItem === item) {
        this.items.splice(index, 1);
      }
    });
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

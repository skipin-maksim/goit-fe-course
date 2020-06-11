const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsRef = document.querySelector('#ingredients');

const createListItem = arr => {
  const itemArrey = arr.map(elem => {
    const listItem = document.createElement('li');
    listItem.textContent = elem;

    return listItem;
  });

  return itemArrey;
};

const addToList = (list, arr) => {
  const arrItems = createListItem(arr);

  return list.append(...arrItems);
};

addToList(listIngredientsRef, ingredients);

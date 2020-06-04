const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

// const addIngredients = (arr, parentElem) => {
//   arr.forEach(elem => {
//     const listItem = document.createElement('li');
//     listItem.textContent = elem;

//     return parentElem.appendChild(listItem);
//   });
// };

// addIngredients(ingredients, listIngredients);
// console.log(listIngredients);

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

addToList(listIngredients, ingredients);

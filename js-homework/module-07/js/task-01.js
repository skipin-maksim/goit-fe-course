// *---------------------------------------------------------------
const itemsInCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemsInCategories.length} категории`);
// *---------------------------------------------------------------

const categoryQuantity = items1 => {
  items1.forEach(array => {
    const listTitle = array.firstElementChild.textContent;
    const listLength = array.lastElementChild.childElementCount;

    console.log('<-------------------------------->');
    console.log(`Категория: ${listTitle}`);
    console.log(`Количество элементов: ${listLength}`);
  });
};

categoryQuantity(itemsInCategories);

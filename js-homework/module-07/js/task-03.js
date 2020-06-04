const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGallery = document.querySelector('#gallery');

// ! create <li> </li>
const createListItem = () => {
  const listItem = document.createElement('li');

  return listItem;
};

// ! create one <li> <img> </li>
const createImgItem = (url, alt) => {
  const item = createListItem();
  item.insertAdjacentHTML('afterbegin', `<img src="${url}" alt="${alt}">`);

  return item;
};

// ! create [arrey <li> <img> </li>]
const addImgToList = items => {
  return items.map(item => createImgItem(item.url, item.alt));
};

// ! spray arrey to <ul> ... </ul>
const addListToGallery = (list, items) => {
  list.append(...addImgToList(items));
};

// ! -- run fn --
addListToGallery(listGallery, images);

// * ------------------- add class name for <img> ---------------------------
const getImg = document.querySelectorAll('img');
const addImgClassName = arr => {
  return arr.forEach(e => {
    e.className = 'gallery__img';
  });
};

addImgClassName(getImg);
// * ------------------------------------------------------------------------

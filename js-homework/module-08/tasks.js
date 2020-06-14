import gallery from './gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  jsLightbox: document.querySelector('.js-lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('[data-action="close-lightbox"]'),
};

refs.galleryList.addEventListener('click', openModal);
refs.closeBtn.addEventListener('click', closeModal);
refs.jsLightbox.addEventListener('click', closeModal);

//! * создать li
function createItem(teg, className) {
  const listItem = document.createElement(teg);
  listItem.classList.add(className);

  return listItem;
}

//! создание элементов списка
function createLiElement(arr) {
  let inx = 0;
  const linkImg = arr.map(element => {
    const liItem = createItem('li', 'gallery__item');

    liItem.insertAdjacentHTML(
      'afterbegin',
      `<a class="gallery__link" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      data-inx="${(inx += 1)}"
      alt="${element.description}"
    />
  </a>`,
    );

    return liItem;
  });

  return linkImg;
}

//! функция добавления в html
function addListItemOnPage(list, items) {
  list.append(...createLiElement(items));
}

addListItemOnPage(refs.galleryList, gallery);

//!-------------------------------------------------
//! открыть модальное окно
function openModal(event) {
  event.preventDefault();

  //* закрытие модального окна по нажатию Escape
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      refs.jsLightbox.classList.remove('is-open');
      refs.lightboxImg.src = '';
    }
  });

  //! -------------------------------------------- влево вправо
  window.addEventListener('keydown', event => {});

  if (event.target !== refs.galleryList) {
    refs.jsLightbox.classList.add('is-open');

    const bigImg = event.target.dataset.source;
    refs.lightboxImg.src = bigImg;

    refs.lightboxImg.setAttribute('data-inx', event.target.dataset.inx);
  }
}

//! закрыть модальное окно
function closeModal(event) {
  if (event.target.nodeName !== 'IMG') {
    refs.jsLightbox.classList.remove('is-open');
    refs.lightboxImg.src = '';
  }
}

//-------------------------------------------------------

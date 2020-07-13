import './styles.css';
import cardFood from './templates/template-card.hbs';
import itemsCard from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  foodList: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  switchInput: document.querySelector('.js-switch-input'),
};

const markup = cardFood(itemsCard);

refs.foodList.insertAdjacentHTML('beforeend', markup);

refs.switchInput.addEventListener('change', changeThemes);

const activeTheme = localStorage.getItem('theme');

// смена темы
function add(first, second) {
  refs.body.classList.add(first);
  refs.body.classList.remove(second);

  localStorage.setItem('theme', first);
}

function changeThemes() {
  refs.switchInput.checked
    ? add(Theme.DARK, Theme.LIGHT)
    : add(Theme.LIGHT, Theme.DARK);
}

// загрузка темы по умолчанию
function loadTheme() {
  if (activeTheme === Theme.DARK) {
    add(Theme.DARK, Theme.LIGHT);

    refs.switchInput.checked = true;
  }
}

loadTheme();

import toastr from 'toastr';
import toastrSettings from './js/toastr-settings';
import fetchCountries from './js/fetchCountries';

import countriesTemplate from './templates/many-countries-list.hbs';
import singleCountryTemplate from './templates/single-country.hbs';

import 'toastr/build/toastr.css';
import './css/styles.css';

const debounce = require('lodash.debounce');

const refs = {
  input: document.querySelector('#name-country'),
  listCountries: document.querySelector('.all-countries-list'),
};

refs.input.addEventListener('input', debounce(inputValueHandler, 500));

function inputValueHandler() {
  const searchInInput = refs.input.value;
  clearListCountries();

  if (searchInInput !== '') {
    fetchCountries(searchInInput)
      .then(data => {
        const countriesObj = data.map(country => country);

        return countriesObj;
      })
      .then(countriesObj => {
        if (countriesObj.length === 1) {
          renderSingleCountry(countriesObj);
          console.log(countriesObj);

          toastr.success('Найдена одна страна', 'Готово');
        } else if (countriesObj.length >= 2 && countriesObj.length <= 10) {
          renderCountries(countriesObj);

          toastr.success(`Найдено ${countriesObj.length} стран(ы)`, 'Готово');
        } else {
          toastr.info(
            'Слишком много совпадений, введите больше букв',
            'Предупреждение',
          );
        }
      })
      .catch(() => {
        toastr.error('Ничего не найдено', 'Ошибка');

        clearListCountries();
      });
  }
}

function renderSingleCountry(obj) {
  refs.listCountries.insertAdjacentHTML(
    'beforeend',
    singleCountryTemplate(obj),
  );
}

function renderCountries(obj) {
  refs.listCountries.insertAdjacentHTML('beforeend', countriesTemplate(obj));
}

function clearListCountries() {
  refs.listCountries.textContent = '';
}

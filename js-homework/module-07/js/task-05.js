const inputValRef = document.querySelector('#name-input');
const nameUserRef = document.querySelector('#name-output');

function onInput(event) {
  const textDefault = 'незнакомец';
  if (nameUserRef.textContent === textDefault) nameUserRef.textContent = '';

  nameUserRef.textContent = event.target.value;

  if (!inputValRef.value) nameUserRef.textContent = textDefault;
}

inputValRef.addEventListener('input', onInput);

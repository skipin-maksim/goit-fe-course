const inputValRef = document.querySelector('#validation-input');
const validLengthRef = Number(inputValRef.getAttribute('data-length'));

inputValRef.addEventListener('blur', checkValid);

function addValidClass() {
  inputValRef.classList.add('valid');

  if (inputValRef.classList.contains('invalid')) {
    inputValRef.classList.remove('invalid');
  }
}

function addInvalidClass() {
  inputValRef.classList.add('invalid');

  if (inputValRef.classList.contains('valid')) {
    inputValRef.classList.remove('valid');
  }
}

function removeClass() {
  inputValRef.classList.contains('valid')
    ? inputValRef.classList.remove('valid')
    : inputValRef.classList.remove('invalid');
}

function checkValid(event) {
  event.target.value.length < validLengthRef
    ? addInvalidClass()
    : addValidClass();

  if (!event.target.value.length) {
    removeClass();
  }
}

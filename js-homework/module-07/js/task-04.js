const counterValueRef = document.querySelector('#value');

const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

function increment() {
  counterValueRef.textContent = parseInt(counterValueRef.textContent, 10) + 1;
}

function decrement() {
  counterValueRef.textContent = parseInt(counterValueRef.textContent, 10) - 1;
}

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);

const inputValRef = document.querySelector('#font-size-control');
const textValRef = document.querySelector('#text');

inputValRef.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  textValRef.style.fontSize = `${event.target.value}px`;
}

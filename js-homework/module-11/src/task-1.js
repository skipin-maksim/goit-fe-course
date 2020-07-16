const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let id = null;
let isActive = false;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', changeColorBody);
refs.stopBtn.addEventListener('click', stopChangeColorBody);

function changeColorBody() {
  if (isActive) {
    return;
  }

  isActive = true;
  refs.startBtn.setAttribute('disabled', true);

  id = setInterval(() => {
    const getColorInx = randomIntegerFromInterval(0, colors.length - 1);

    refs.body.style.backgroundColor = colors[getColorInx];
  }, 1000);
}

function stopChangeColorBody() {
  isActive = false;
  refs.startBtn.removeAttribute('disabled');

  clearInterval(id);
}

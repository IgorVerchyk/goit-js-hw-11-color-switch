import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  buttonStart: document.querySelector('button[data-action ="start"]'),
  buttonStop: document.querySelector('button[data-action ="stop"]'),
  background: document.querySelector('body'),
};

let intervalId = null;

function startParty() {
  intervalId = setInterval(() => {
    const partyMaker = colors[randomIntegerFromInterval(0, colors.length)];
    refs.background.style.backgroundColor = partyMaker;
  }, 1000);
  partyButtonsStyle(refs.buttonStart, refs.buttonStop);
}

function stopParty() {
  clearInterval(intervalId);
  partyButtonsStyle(refs.buttonStop, refs.buttonStart);
}

function partyButtonsStyle(enabledBut, disabledBut) {
  enabledBut.setAttribute('disabled', 'disabled');
  disabledBut.removeAttribute('disabled');
  if (enabledBut === refs.buttonStart) {
    refs.buttonStart.classList.add('start');
    refs.buttonStop.classList.remove('stop');
  } else {
    refs.buttonStart.classList.remove('start');
    refs.buttonStop.classList.add('stop');
  }
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.buttonStart.addEventListener('click', startParty);
refs.buttonStop.addEventListener('click', stopParty);

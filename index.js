const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
  colors: ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"],
};

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorSwitch() {
  refs.body.style.backgroundColor =
    refs.colors[randomIntegerFromInterval(0, refs.colors.length)];
}

function onStartClick() {
  timerId = setInterval(() => {
    colorSwitch();
  }, 1000);

  refs.startBtn.disabled = true;
}

function onStopClick() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener("click", onStartClick);
refs.stopBtn.addEventListener("click", onStopClick);

refs = {
  startBtn: document.querySelector("[start]"),
  stopBtn: document.querySelector("[stop]"),
  colors: ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"],
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn = addEventListener("click", () => {});

refs.stopBtn = addEventListener("click", () => {});

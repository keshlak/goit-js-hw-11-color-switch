refs = {
  startBtn: document.querySelector("[start]"),
  stopBtn: document.querySelector("[stop]"),
  body: document.querySelector("body"),
  colors: ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"],
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colorSwitch = function () {};
refs.startBtn = addEventListener("click", () => {
  refs.body.style.backgroundColor = refs.colors[2];
});

refs.stopBtn = addEventListener("click", () => {});

import './popup.css';

const deleteButton = document.getElementById('delete-local-storage');

const positive = document.getElementById('posRating');
const neutral = document.getElementById('neuRating');
const negative = document.getElementById('negRating');
const compound = document.getElementById('compound');
const pieChart = document.querySelector('.pie-chart');

let summary = {};

const addResults = (r1, r2) => {
  let result = {};
  if (r1.pos == null) {
    console.log('r1 was null', r1);
    result = r2;
    result.count = 1;
  } else {
    result.compound = r1.compound + r2.compound;
    result.neg = r1.neg + r2.neg;
    result.neu = r1.neu + r2.neu;
    result.pos = r1.pos + r2.pos;
    result.count = r1.count + 1;
  }
  return result;
};

const summarizeEvents = () => {
  chrome.storage.local.get(['events'], (items) => {
    sumUp(items.events);
  });
};

const sumUp = (events) => {
  console.log(events);
  for (var i = 0; i < events.length; i++) {
    summary = addResults(summary, events[i].result);
  }
};
const clearLocalStorage = () => {
  console.log(summary);
  //chrome.storage.local.clear();
};

function handleLoaded() {
  const posPerc = Math.round((summary.pos / summary.count) * 100);
  const negPerc = Math.round((summary.neg / summary.count) * 100);
  const neuPerc = Math.round((summary.neu / summary.count) * 100);

  positive.innerText = posPerc + '%';
  negative.innerText = negPerc + '%';
  neutral.innerText = neuPerc + '%';
  const posDeg = Math.round((posPerc / 100) * 360);
  const negDeg = Math.round((posPerc / 100) * 360);

  const gradient = `conic-gradient(var(--negative) ${negDeg}deg, var(--positive) ${negDeg}deg ${
    posDeg + negDeg
  }deg, var(--neutral) ${posDeg + negDeg}deg 360deg)`;
  console.log(gradient);
  pieChart.style.background = gradient;
  compound.innerText = summary.compound + ' ' + summary.count;
}

function handleLoad() {
  summarizeEvents();
  setTimeout(handleLoaded, 300);
}

deleteButton.onclick = clearLocalStorage;
window.onload = handleLoad;

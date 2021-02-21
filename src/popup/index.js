import './popup.css';

const deleteButton = document.getElementById('delete');

const positive = document.getElementById('posRating');
const negative = document.getElementById('negRating');
const compound = document.getElementById('compound');
const pieChart = document.querySelector('.pie-chart');

let summary = {
  compound: 0,
  pos: 0,
  neg: 0,
  neu: 0,
  compound_positive: 0,
  compound_negative: 0,
  count: 0,
};

const addResults = (event) => {
  summary.compound += event.compound;
  if (event.compound > 0) {
    summary.compound_positive += event.compound;
  } else {
    summary.compound_negative += event.compound;
  }
  summary.neg += event.neg;
  summary.neu += event.neu;
  summary.pos += event.pos;
  summary.count += 1;
};

const summarizeEvents = () => {
  chrome.storage.local.get(['events'], (items) => {
    sumUp(items.events);
  });
};

const sumUp = (events) => {
  console.log(events);
  for (var i = 0; i < events.length; i++) {
    addResults(events[i].result);
  }
};
const clearLocalStorage = () => {
  console.log(summary);
  //chrome.storage.local.clear();
};

function handleLoaded() {
  const total = summary.compound_positive + Math.abs(summary.compound_negative);
  const compound_negative = Math.abs(
    Math.round((summary.compound_negative / total) * 100)
  );
  const compound_positive = Math.round(
    (summary.compound_positive / total) * 100
  );
  positive.innerText = compound_positive + '%';
  negative.innerText = compound_negative + '%';

  const posDeg = Math.round((compound_positive / 100) * 360);
  const negDeg = Math.round((compound_negative / 100) * 360);

  const gradient = `conic-gradient(var(--negative) ${negDeg}deg, var(--positive) ${negDeg}deg 360deg)`;
  pieChart.style.background = gradient;
}

function handleLoad() {
  summarizeEvents();
  setTimeout(handleLoaded, 300);
}

deleteButton.onclick = clearLocalStorage;
window.onload = handleLoad;

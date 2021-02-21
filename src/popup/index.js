import './popup.css';
import dayjs from 'dayjs';

const deleteButton = document.getElementById('delete');

const positive = document.getElementById('posRating');
const negative = document.getElementById('negRating');
const pieChart = document.querySelector('.pie-chart');
const timeStart = document.getElementById('start');
const timeEnd = document.getElementById('end');
const smiling = document.querySelector('.smiling');
const neutral = document.querySelector('.neutral');
const disappointed = document.querySelector('.disappointed');
const smallFrown = document.querySelector('.smallFrown');
const weary = document.querySelector('.weary');

let timeObj = {};
let summary = {
  compound: 0,
  pos: 0,
  neg: 0,
  neu: 0,
  compound_positive: 0,
  compound_negative: 0,
  count: 0,
};
let feelings = {
  smiling: 0,
  neutral: 0,
  smallFrown: 0,
  disappointed: 0,
  weary: 0,
  total: 0,
};

const addResults = (event) => {
  if (event) {
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
  }
};

const addFeelings = (feeling) => {
  feelings.total++;
  switch (feeling) {
    case 'smiling':
      feelings.smiling++;
      break;
    case 'neutral':
      feelings.neutral++;
      break;
    case 'small-frown':
      feelings.smallFrown++;
      break;
    case 'disappointed':
      feelings.disappointed++;
      break;
    case 'weary':
      feelings.weary++;
      break;
    default:
      return;
  }
};

const summarizeEvents = () => {
  chrome.storage.local.get(['events'], (items) => {
    sumUp(items.events);
  });
};

const summarizeFeelings = () => {
  chrome.storage.local.get(['feelings'], (items) => {
    sumUpFeelings(items.feelings);
  });
};

const sumUp = (events) => {
  for (var i = 0; i < events.length; i++) {
    if (i === 0) timeObj.start = events[i].timestamp;
    if (i === events?.length - 1) timeObj.end = events[i].timestamp;
    addResults(events[i].result);
  }
};

const sumUpFeelings = (feelings) => {
  console.log(feelings);
  for (let i = 0; i < feelings.length; i++) {
    addFeelings(feelings[i]);
  }
};

const clearLocalStorage = () => {
  chrome.storage.local.clear();
  summary = {
    compound: 0,
    pos: 0,
    neg: 0,
    neu: 0,
    compound_positive: 0,
    compound_negative: 0,
    count: 0,
  };
  timeObj = {
    start: Date.now(),
    end: Date.now(),
  };
  handleLoad();
};

function handleLoaded() {
  // producing the pie chart //
  const total = summary.compound_positive + Math.abs(summary.compound_negative);
  let compound_negative = Math.abs(
    Math.round((summary.compound_negative / total) * 100)
  );
  let compound_positive = Math.round((summary.compound_positive / total) * 100);
  if (isNaN(compound_negative)) compound_negative = 0;
  if (isNaN(compound_positive)) compound_positive = 0;

  positive.innerText = compound_positive + '%';
  negative.innerText = compound_negative + '%';

  const posDeg = Math.round((compound_positive / 100) * 360);
  const negDeg = Math.round((compound_negative / 100) * 360);

  const gradient = `conic-gradient(var(--negative) ${negDeg}deg, var(--positive) ${negDeg}deg 360deg)`;

  const testGradient = `conic-gradient(var(--negative) ${
    negDeg - 20
  }deg, ${negDeg}deg, var(--positive) ${negDeg + 20}deg)`;

  const testTwoGradient = `conic-gradient(var(--negative), ${negDeg}deg, var(--positive)`;
  pieChart.style.background = testGradient;

  const start = dayjs(timeObj.start).format('ddd D MMM YYYY HH:mm');
  timeStart.innerText = start;
  timeEnd.innerText = dayjs(timeObj.end).format('ddd D MMM YYYY HH:mm');
  // producing the feelings graph

  console.log(feelings);
  const smilingPerc = (feelings.smiling / feelings.total) * 100;
  const neutralPerc = (feelings.neutral / feelings.total) * 100;
  const disappointedPerc = (feelings.disappointed / feelings.total) * 100;
  const smallFrownPerc = (feelings.smallFrown / feelings.total) * 100;
  const wearyPerc = (feelings.weary / feelings.total) * 100;
  smiling.style.height = smilingPerc + 'px';
  neutral.style.height = neutralPerc + 'px';
  disappointed.style.height = disappointedPerc + 'px';
  smallFrown.style.height = smallFrownPerc + 'px';
  weary.style.height = wearyPerc + 'px';
}

function handleLoad() {
  summarizeEvents();
  summarizeFeelings();
  setTimeout(handleLoaded, 500);
}

deleteButton.onclick = clearLocalStorage;
window.onload = handleLoad;

import './popup.css';

const deleteButton = document.getElementById('delete-local-storage');

const positive = document.getElementById('posRating');
const neutral = document.getElementById('neuRating');
const negative = document.getElementById('negRating');

let summary = {};

function handleLoad() {
  chrome.storage.local.get('events', (resp) => {
    const data = resp.events;
  });

  summarizeEvents();

}

window.onload = handleLoad;

const clearLocalStorage = () => {
  console.log(window);
  //chrome.storage.local.clear();
};

deleteButton.onclick = clearLocalStorage;


const addResults = (r1, r2)=> {
	let result = {}
	if (r1.pos == null) {
		console.log('r1 was null', r1)
		result = r2;
		result.count = 1;
	} else {
		result.compound = (r1.compound + r2.compound);
		result.neg = (r1.neg + r2.neg);
		result.neu = (r1.neu + r2.neu);
		result.pos = (r1.pos + r2.pos);
		result.count = r1.count + 1;
	}
	return result;
}

const summarizeEvents = () => {
	chrome.storage.local.get(['events'], (items) => {
		sumUp(items.events);
	});
}

const sumUp = (events) => {
	for (var i = 0; i < events.length; i++) {
		summary = addResults(summary, events[i].result)
	}
}

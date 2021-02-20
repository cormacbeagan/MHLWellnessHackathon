import './popup.css';

const deleteButton = document.getElementById('delete-local-storage');

const positive = document.getElementById('posRating');
const neutral = document.getElementById('neuRating');
const negative = document.getElementById('negRating');

function handleLoad() {
  chrome.storage.local.get('events', (resp) => {
    const data = resp.events;
  });
}

window.onload = handleLoad;

const clearLocalStorage = () => {
  console.log(window);
  //chrome.storage.local.clear();
};

deleteButton.onclick = clearLocalStorage;

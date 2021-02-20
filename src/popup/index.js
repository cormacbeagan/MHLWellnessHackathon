import './popup.css';

const deleteButton = document.getElementById('delete-local-storage');

const positive = document.getElementById('');

let data;
function handleLoad() {
  chrome.storage.local.get('events', (resp) => {
    data = resp;
  });
}

window.onload = handleLoad;

const clearLocalStorage = () => {
  console.log(data);
  console.log(window);

  //chrome.storage.local.clear();
};

deleteButton.onclick = clearLocalStorage;

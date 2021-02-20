import './popup.css';

const deleteButton = document.getElementById('delete-local-storage')

const clearLocalStorage = () => {
	chrome.storage.local.clear();	
}

deleteButton.onclick = clearLocalStorage;

let eventPipe = []

const saveToStorage = (event) => {
	chrome.storage.local.get(['events'], (items) => {
		// console.log('items', items);
		// console.log('items.events', items.events);
		let new_array = null;
		if (items.events == null) {
		    new_array = new Array(event);
		} else {
			new_array = items.events.concat(event)
		}

		chrome.storage.local.set({'events': new_array}, () => {
			// console.log(`Saved ${event} to local storage`);
		})
	});
}

const handleNewData = (data) => {
	// console.log('Start of data handler', data)
	eventPipe.push(data)
	// console.log(eventPipe.length)
	return 'New data handled successfully'
}

const receiveMessage = (message, sender, sendResponse) => {
	switch (message.label) {
		case 'analysis-result':
			// console.log('analysis-result');
			sendResponse(handleNewData(message.data));
			break;
		case 'load-complete':
			break;
		case 'page-still-loading':
			console.log('page-still-loading');
			break;
	default: 
		sendResponse(Error('Unrecognised message label'))
	}
}

const intervalID = setInterval(() => {
	if (eventPipe.length > 0) {
		saveToStorage(eventPipe.shift());
	}
}, 100)

chrome.runtime.onMessage.addListener(receiveMessage);

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);
  }
});
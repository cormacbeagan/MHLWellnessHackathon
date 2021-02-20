const handleNewData = (data) => {
	let events = chrome.sotage.local.get(['events'])
	events.push(data);
	chrome.storage.local.set({events: events}, () => {
		console.log(`Saved ${data} to local storage`);
	})
	return 'New data handled successfully'
}

const receiveMessage = (message, sender, sendResponse) => {
	switch (message.label) {
		case 'analysis-result':
			console.log('analysis-result');
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
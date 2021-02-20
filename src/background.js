const handleNewData = (data) => {
	console.log(data);
	return 'New data handled successfully'
}

const receiveMessage = (message, sender, sendResponse) => {
	switch (message.label) {
		case 'analysis-result':
			console.log('analysis-result');
			sendResponse(handleNewData(message.data));
			break;
		case 'load-complete':
			sendResponse('Thanks.');
			break;
		case 'page-still-loading':
			console.log('page-still-loading');
			break;
	default: 
		sendResponse(Error('Unrecognised message label'))
	}
}

chrome.runtime.onMessage.addListener(receiveMessage);

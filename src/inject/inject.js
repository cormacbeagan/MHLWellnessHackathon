chrome.extension.sendMessage({label: 'page-still-loading'}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		onLoadComplete();
	}
	}, 10);
});

const onLoadComplete = () => {
	chrome.extension.sendMessage({label: 'load-complete'}, (response) => {console.log(response)})
	return;
}


const sendAnalysis = (data) => {
	const message = {
		label: 'analysis-result',
		data: data
	}
	chrome.runtime.sendMessage(message, function(response) {
		console.log(response)
	});
};


chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
    const headlines = Array.from(document.getElementsByClassName("gs-c-promo-heading__title"))

    if(headlines.length > 0) {
     const headlineTexts = headlines.map((headline)=> {
       return headline.innerHTML
     })
     console.log(headlineTexts);
    } else {
      console.log("nothing here");
    }

	}
	}, 10);
});
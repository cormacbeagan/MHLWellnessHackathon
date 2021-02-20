const vader = require('vader-sentiment');
import './inject.css';

chrome.extension.sendMessage({label: 'page-still-loading'}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		onLoadComplete();
		
    const headlines = Array.from(document.getElementsByClassName("gs-c-promo-heading__title"))

    if(headlines.length > 0) {
     const headlineTexts = headlines.map((headline)=> {
       return headline.innerHTML
     })
     headlineTexts.forEach((headline) =>{
       const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(headline);
       // console.log(intensity);
      //  console.log(headline, `score: ${intensity.compound}`);
     })
     
    } else {
      console.log("nothing here");
    }
      // ----------------------------------------------------------
    }
  }, 10);
});


const onLoadComplete = () => {
	chrome.extension.sendMessage({label: 'load-complete'}, (response) => {return})
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

sendAnalysis([1,2,3])

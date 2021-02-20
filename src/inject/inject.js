const vader = require('vader-sentiment');
import './inject.css';

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
    // const headlines = Array.from(document.getElementsByClassName("gs-c-promo-heading__title"))

    // if(headlines.length > 0) {
    //  const headlineTexts = headlines.map((headline)=> {
    //    return headline.innerHTML
    //  })
    //  headlineTexts.forEach((headline) =>{
    //    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(headline);
    //    console.log(intensity);
    //   //  console.log(headline, `score: ${intensity.compound}`);
    //  })
     
    // } else {
    //   console.log("nothing here");
    // }
    const popup = document.createElement('div')
    popup.classList.add('my-popup')
    popup.onmouseover = function() {
      console.log("mouseover");

      popup.classList.add('expand')
    }
    popup.onmouseleave = function() {
      popup.classList.remove('expand')
    }
    const innerDiv = document.createElement('ul')
    const positive = document.createElement('li')
    positive.classList.add('positive')
    const posText = document.createTextNode("positive")
    positive.appendChild(posText)
    innerDiv.appendChild(positive)
    const negative = document.createElement('li')
    negative.classList.add('negative')
    const negText = document.createTextNode("negative")
    negative.appendChild(negText)
    innerDiv.appendChild(negative)
    popup.appendChild(innerDiv)
    const body = document.getElementsByTagName('body');
    body[0].appendChild(popup)
    
    positive.onclick = function() {console.log("I've been clicked - I feel positive");}
    negative.onclick = function() {console.log("I've been clicked - I feel negative");}
    // ----------------------------------------------------------
    }
  }, 10);
});

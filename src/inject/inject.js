const vader = require('vader-sentiment');
import './inject.css';

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

chrome.extension.sendMessage(
  { label: 'page-still-loading' },
  function (response) {
    var readyStateCheckInterval = setInterval(function () {
      if (document.readyState === 'complete') {
        clearInterval(readyStateCheckInterval);

        // ----------------------------------------------------------
        // This part of the script triggers when page is done loading
        console.log('Page loaded');
        // ----------------------------------------------------------

        // load each P tag and create an array of objects with intensity and position on the y axis
        const paragraphs = Array.from(document.querySelectorAll('p'));
        let paraObjects = [];
        let objectsToSend = [];

        if (paragraphs.length > 0) {
          paraObjects = paragraphs.map((para, index) => {
            return {
              id: index,
              text: para.innerText,
              offset: para.offsetTop,
              intensity: vader.SentimentIntensityAnalyzer.polarity_scores(
                para.innerText
              ),
            };
          });
          handleScroll();
        } else {
          console.log('nothing here');
        }

        function handleScroll() {
          const top = window.scrollY;
          const bottom = top + window.innerHeight;
          paraObjects.map((object) => {
            if (object.offset < bottom && object.offset > top) {
              objectsToSend.push(object);
              paraObjects = paraObjects.filter((item) => item.id !== object.id);
            }
          });
        }

        window.addEventListener('scroll', debounce(handleScroll));
      }
    }, 10);
  }
);

const onLoadComplete = () => {
  chrome.extension.sendMessage({ label: 'load-complete' }, (response) => {
    return;
  });
  return;
};

const sendAnalysis = (data) => {
  const message = {
    label: 'analysis-result',
    data: data,
  };
  chrome.runtime.sendMessage(message, function (response) {
    console.log(response);
  });
};

sendAnalysis([1, 2, 3]);

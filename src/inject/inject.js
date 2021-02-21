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

const popup = document.createElement('div')
popup.classList.add('my-popup')
popup.onmouseover = function() {
  console.log("mouseover");
  popup.classList.add('expand')
  for (var i = 0; i < popup.children.length; i++) {
    popup.children[i].classList.remove('hidden')
  }
  noteDiv.classList.add('hidden')
}

popup.onmouseleave = function() {
  popup.classList.remove('expand')
  for (var i = 0; i < popup.children.length; i++) {
    popup.children[i].classList.add('hidden')
  }
  noteDiv.classList.remove('hidden')

}

const noteDiv = document.createElement('div')
noteDiv.classList.add('note')
const brainImg = new Image();
brainImg.src = chrome.runtime.getURL('logo.svg');
noteDiv.appendChild(brainImg);
popup.appendChild(noteDiv);

const emotionButtonNames = ['1','2','3','4','5']
const emotionButtonFileNames = ['emoji_1.svg','emoji_2.svg','emoji_3.svg','emoji_4.svg','emoji_5.svg']
const emotionButtonEmojis = ['&#x1F642','&#x1F610','&#x1F641','&#x1F61E', '&#x1F629']
const emotionButtonDescriptions = ['smiling','neutral','small-frown','disappointed', 'weary']

const sendFeelings = (feeling) => {
  console.log(feeling);
  const message = {
    label: 'reader-feelings',
    data: feeling,
  };
  chrome.runtime.sendMessage(message, function (response) {
    console.log(response);
  });
};

for (var i = 0; i < emotionButtonNames.length; i++) {
  const emDiv = document.createElement('div')
  emDiv.classList.add('emotion')
  emDiv.classList.add('hidden')

  const emojiImg = new Image();
  emojiImg.src = chrome.runtime.getURL(emotionButtonFileNames[i]);
  emDiv.appendChild(emojiImg)

  emDiv.setAttribute('data-tooltip', emotionButtonDescriptions[i])
  emDiv.id = emotionButtonDescriptions[i];
  // emDiv.innerHTML = emotionButtonEmojis[i];
  emDiv.onclick = function (e) {
    sendFeelings(e.target.id);
  };
  popup.appendChild(emDiv);
}


const body = document.getElementsByTagName('body');
body[0].appendChild(popup)


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
        const domain = window.location.href;

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
              sendAnalysis({
                timestamp: Date.now(),
                text: object.text,
                result: object.intensity,
                domain,
              });
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


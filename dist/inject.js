/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/inject/inject.js ***!
  \******************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NSExXZWxsbmVzc0hhY2thdGhvbi8uL3NyYy9pbmplY3QvaW5qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGLENBQUMsRSIsImZpbGUiOiJpbmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUuZXh0ZW5zaW9uLnNlbmRNZXNzYWdlKHt9LCBmdW5jdGlvbihyZXNwb25zZSkge1xuXHR2YXIgcmVhZHlTdGF0ZUNoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuXHRcdGNsZWFySW50ZXJ2YWwocmVhZHlTdGF0ZUNoZWNrSW50ZXJ2YWwpO1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIFRoaXMgcGFydCBvZiB0aGUgc2NyaXB0IHRyaWdnZXJzIHdoZW4gcGFnZSBpcyBkb25lIGxvYWRpbmdcblx0XHRjb25zb2xlLmxvZyhcIkhlbGxvLiBUaGlzIG1lc3NhZ2Ugd2FzIHNlbnQgZnJvbSBzY3JpcHRzL2luamVjdC5qc1wiKTtcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3QgaGVhZGxpbmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3MtYy1wcm9tby1oZWFkaW5nX190aXRsZVwiKSlcblxuICAgIGlmKGhlYWRsaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgIGNvbnN0IGhlYWRsaW5lVGV4dHMgPSBoZWFkbGluZXMubWFwKChoZWFkbGluZSk9PiB7XG4gICAgICAgcmV0dXJuIGhlYWRsaW5lLmlubmVySFRNTFxuICAgICB9KVxuICAgICBjb25zb2xlLmxvZyhoZWFkbGluZVRleHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJub3RoaW5nIGhlcmVcIik7XG4gICAgfVxuXG5cdH1cblx0fSwgMTApO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
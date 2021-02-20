/******/ (() => { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/inject/inject.js ***!
  \******************************/
const vader = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vader-sentiment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NSExXZWxsbmVzc0hhY2thdGhvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NSExXZWxsbmVzc0hhY2thdGhvbi8uL3NyYy9pbmplY3QvaW5qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7OztBQ3JCQSxjQUFjLG1CQUFPLENBQUMsOElBQWlCOztBQUV2QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0YsQ0FBQyxFIiwiZmlsZSI6ImluamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgdmFkZXIgPSByZXF1aXJlKCd2YWRlci1zZW50aW1lbnQnKTtcblxuY2hyb21lLmV4dGVuc2lvbi5zZW5kTWVzc2FnZSh7fSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0dmFyIHJlYWR5U3RhdGVDaGVja0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblx0XHRjbGVhckludGVydmFsKHJlYWR5U3RhdGVDaGVja0ludGVydmFsKTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBUaGlzIHBhcnQgb2YgdGhlIHNjcmlwdCB0cmlnZ2VycyB3aGVuIHBhZ2UgaXMgZG9uZSBsb2FkaW5nXG5cdFx0Y29uc29sZS5sb2coXCJIZWxsby4gVGhpcyBtZXNzYWdlIHdhcyBzZW50IGZyb20gc2NyaXB0cy9pbmplY3QuanNcIik7XG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0IGhlYWRsaW5lcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdzLWMtcHJvbW8taGVhZGluZ19fdGl0bGVcIikpXG5cbiAgICBpZihoZWFkbGluZXMubGVuZ3RoID4gMCkge1xuICAgICBjb25zdCBoZWFkbGluZVRleHRzID0gaGVhZGxpbmVzLm1hcCgoaGVhZGxpbmUpPT4ge1xuICAgICAgIHJldHVybiBoZWFkbGluZS5pbm5lckhUTUxcbiAgICAgfSlcbiAgICAgY29uc29sZS5sb2coaGVhZGxpbmVUZXh0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZyBoZXJlXCIpO1xuICAgIH1cblxuXHR9XG5cdH0sIDEwKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
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

	}
	}, 10);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NSExXZWxsbmVzc0hhY2thdGhvbi8uL3NyYy9pbmplY3QvaW5qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRixDQUFDLEUiLCJmaWxlIjoiaW5qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2hyb21lLmV4dGVuc2lvbi5zZW5kTWVzc2FnZSh7fSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0dmFyIHJlYWR5U3RhdGVDaGVja0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblx0XHRjbGVhckludGVydmFsKHJlYWR5U3RhdGVDaGVja0ludGVydmFsKTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBUaGlzIHBhcnQgb2YgdGhlIHNjcmlwdCB0cmlnZ2VycyB3aGVuIHBhZ2UgaXMgZG9uZSBsb2FkaW5nXG5cdFx0Y29uc29sZS5sb2coXCJIZWxsby4gVGhpcyBtZXNzYWdlIHdhcyBzZW50IGZyb20gc2NyaXB0cy9pbmplY3QuanNcIik7XG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdH1cblx0fSwgMTApO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
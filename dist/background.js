/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NSExXZWxsbmVzc0hhY2thdGhvbi8uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEUiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlmIHlvdSBjaGVja2VkIFwiZmFuY3ktc2V0dGluZ3NcIiBpbiBleHRlbnNpb25penIuY29tLCB1bmNvbW1lbnQgdGhpcyBsaW5lc1xuXG4vLyB2YXIgc2V0dGluZ3MgPSBuZXcgU3RvcmUoXCJzZXR0aW5nc1wiLCB7XG4vLyAgICAgXCJzYW1wbGVfc2V0dGluZ1wiOiBcIlRoaXMgaXMgaG93IHlvdSB1c2UgU3RvcmUuanMgdG8gcmVtZW1iZXIgdmFsdWVzXCJcbi8vIH0pO1xuXG5cbi8vZXhhbXBsZSBvZiB1c2luZyBhIG1lc3NhZ2UgaGFuZGxlciBmcm9tIHRoZSBpbmplY3Qgc2NyaXB0c1xuY2hyb21lLmV4dGVuc2lvbi5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoXG4gIGZ1bmN0aW9uKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gIFx0Y2hyb21lLnBhZ2VBY3Rpb24uc2hvdyhzZW5kZXIudGFiLmlkKTtcbiAgICBzZW5kUmVzcG9uc2UoKTtcbiAgfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
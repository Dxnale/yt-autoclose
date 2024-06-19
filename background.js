chrome.webNavigation.onCompleted.addListener(function(details) {
  if (details.url.includes("https://www.youtube.com/watch?v=")) {
    console.log("Listening on URL: " + details.url);
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['content.js']
    });
  }
}, {url: [{hostSuffix: 'youtube.com', pathPrefix: '/watch'}]});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "videoEnded") {
    console.log("Video ended");
    chrome.tabs.remove(sender.tab.id);
  }
});

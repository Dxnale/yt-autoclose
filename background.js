chrome.tabs.onUpdated.addListener(observarTabs);

function observarTabs() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    if (url.includes("https://www.youtube.com/watch?v=")) {
      console.log("URL: " + url);
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      });
    }
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "videoEnded") {
    console.log("Video ended");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.remove(tabs[0].id);
    });
  }
});
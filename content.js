function exitOnVideoEnd() {
  
  const video = document.querySelector("video");

  if (!video.ended) {
    setTimeout(exitOnVideoEnd, 1000);
    return;
  }

  chrome.runtime.sendMessage({ action: "videoEnded" });
}
exitOnVideoEnd();

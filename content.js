function checkVideoEnded() {

    const video = document.querySelector('video');

    if (!video) {
      setTimeout(checkVideoEnded, 1000);
      return;
    } 

    video.addEventListener('ended', () => {
        chrome.runtime.sendMessage({ action: "closeTab" });
      });
    
  }
  
 checkVideoEnded();
  
const blackList = [/.*youtube\.com.*/g, /.*reddit\/.com*/g];

chrome.tabs.query({}, tabs => {
  tabs.forEach((tab: chrome.tabs.Tab) => {
    const url = tab.url;

    if (!tab || !url) {
      return;
    }

    if (blackList.some(element => url.match(element))) {
      if (tab.id) {
        chrome.tabs.remove(tab.id);
      }
    }
  });
});

chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return {
      redirectUrl: "https://www.google.com"
    };
  },
  { urls: ["*://www.youtube.com/*"] },
  ["blocking"]
);

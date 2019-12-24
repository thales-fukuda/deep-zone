const blackList = ['youtube', 'reddit']
chrome.tabs.query({}, tabs => {
  tabs.forEach((tab: chrome.tabs.Tab) => {
    const url = tab.url

    if (!tab || !url) {
      return
    }

    if (blackList.some(element => url.includes(element))) {
      if (tab.id) {
        chrome.tabs.remove(tab.id)
      }
    }
  })
})

chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return {
      redirectUrl: 'https://www.google.com',
    }
  },
  { urls: ['*://www.youtube.com/*'] },
  ['blocking']
)

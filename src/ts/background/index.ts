const blackList = ['*://www.youtube.com/*']
const redirectUrl = chrome.runtime.getURL('/blockPage.html')

const urlQuery = {
  url: blackList,
}

chrome.tabs.query(urlQuery, tabs => {
  tabs.forEach((tab: chrome.tabs.Tab) => {
    const id = tab.id

    if (!tab || !id) {
      return
    }
    chrome.tabs.remove(id)
  })
})

chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return {
      redirectUrl,
    }
  },
  { urls: blackList, types: ['main_frame'] },
  ['blocking']
)

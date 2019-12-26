const blackList = ['*://www.youtube.com/*']
const redirectUrl = 'https://www.google.com'

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
  { urls: blackList },
  ['blocking']
)

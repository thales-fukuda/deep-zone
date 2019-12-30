const blackList = ['*://www.youtube.com/*']
const redirectUrl = chrome.runtime.getURL('/blockPage.html')

const urlQuery = {
  url: blackList,
}

const redirectToBlockPage = () => {
  return {
    redirectUrl,
  }
}

const startDeepZone = () => {
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
    redirectToBlockPage,
    { urls: blackList, types: ['main_frame'] },
    ['blocking']
  )
}

chrome.runtime.onMessage.addListener(request => {
  if (!request) {
    return
  }

  switch (request.message) {
    case 'start':
      startDeepZone()
      break

    case 'stop':
      chrome.webRequest.onBeforeRequest.removeListener(redirectToBlockPage)
      break

    default:
      break
  }
})
